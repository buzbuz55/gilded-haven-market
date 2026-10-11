CREATE TYPE public.app_role AS ENUM ('admin','user');
CREATE TABLE public.user_roles (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL, role public.app_role NOT NULL, UNIQUE(user_id, role));
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users see own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;
-- First account to claim becomes the owner/admin; afterwards nobody else can.
CREATE OR REPLACE FUNCTION public.claim_owner() RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF auth.uid() IS NULL OR EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN RETURN false; END IF;
  INSERT INTO public.user_roles (user_id, role) VALUES (auth.uid(), 'admin');
  RETURN true;
END; $$;
REVOKE EXECUTE ON FUNCTION public.claim_owner() FROM anon, public;
GRANT EXECUTE ON FUNCTION public.claim_owner() TO authenticated;
CREATE POLICY "Admins see all listings" ON public.listings FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins update listings" ON public.listings FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Live listing photos are public" ON storage.objects FOR SELECT USING (bucket_id = 'listing-photos' AND EXISTS (SELECT 1 FROM public.listings l WHERE l.image_path = name AND l.status = 'live'));
CREATE POLICY "Admins view listing photos" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'listing-photos' AND public.has_role(auth.uid(),'admin'));