-- Inquiries: replace open WITH CHECK (true) with real validation
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON public.inquiries;
CREATE POLICY "Anyone can submit valid inquiries" ON public.inquiries
FOR INSERT TO anon, authenticated
WITH CHECK (
  kind IN ('invest','join','consign','contact','career','buy')
  AND char_length(btrim(name)) BETWEEN 1 AND 200
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR char_length(phone) <= 50)
  AND (message IS NULL OR char_length(message) <= 5000)
  AND pg_column_size(details) <= 20000
  AND (resume_path IS NULL OR resume_path ~ '^[0-9a-f-]{36}\.(pdf|doc|docx)$')
);

-- Resumes: only random-named PDF/Word files, no overwrite paths
DROP POLICY IF EXISTS "Anyone can upload resumes" ON storage.objects;
CREATE POLICY "Anyone can upload valid resumes" ON storage.objects
FOR INSERT TO anon, authenticated
WITH CHECK (
  bucket_id = 'resumes'
  AND name ~ '^[0-9a-f-]{36}\.(pdf|doc|docx)$'
);

-- Listing photos: remove blanket read; sellers read their own photos
DROP POLICY IF EXISTS "Listing photos read" ON storage.objects;
CREATE POLICY "Sellers view own photos" ON storage.objects
FOR SELECT TO authenticated
USING (bucket_id = 'listing-photos' AND (storage.foldername(name))[1] = (auth.uid())::text);