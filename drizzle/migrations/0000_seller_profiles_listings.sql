CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.profiles TO anon, authenticated;
GRANT UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles are public" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)));
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TABLE public.listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid NOT NULL,
  title text NOT NULL CHECK (char_length(title) BETWEEN 2 AND 200),
  category text NOT NULL CHECK (char_length(category) <= 50),
  brand text CHECK (char_length(brand) <= 200),
  description text NOT NULL CHECK (char_length(description) <= 4000),
  condition text CHECK (char_length(condition) <= 50),
  asking_price numeric(12,2) NOT NULL CHECK (asking_price > 0),
  image_path text,
  status text NOT NULL DEFAULT 'pending_review',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.listings TO authenticated;
GRANT SELECT ON public.listings TO anon;
GRANT ALL ON public.listings TO service_role;
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Live listings are public" ON public.listings FOR SELECT USING (status = 'live' OR auth.uid() = seller_id);
CREATE POLICY "Sellers create own listings" ON public.listings FOR INSERT TO authenticated WITH CHECK (auth.uid() = seller_id AND status = 'pending_review');
CREATE POLICY "Sellers update own pending listings" ON public.listings FOR UPDATE TO authenticated USING (auth.uid() = seller_id AND status = 'pending_review') WITH CHECK (auth.uid() = seller_id AND status = 'pending_review');
CREATE POLICY "Sellers delete own listings" ON public.listings FOR DELETE TO authenticated USING (auth.uid() = seller_id);

CREATE POLICY "Listing photos read" ON storage.objects FOR SELECT USING (bucket_id = 'listing-photos');
CREATE POLICY "Sellers upload own photos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'listing-photos' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "Sellers delete own photos" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'listing-photos' AND (storage.foldername(name))[1] = auth.uid()::text);