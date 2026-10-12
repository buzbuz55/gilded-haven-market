DROP POLICY IF EXISTS "Profiles are public" ON public.profiles;
CREATE POLICY "Signed-in members read profiles" ON public.profiles
FOR SELECT TO authenticated USING (true);
REVOKE SELECT ON public.profiles FROM anon;