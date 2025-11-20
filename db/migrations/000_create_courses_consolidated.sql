-- Hapus tabel lama
DROP TABLE IF EXISTS public.courses CASCADE;

-- Buat tabel baru dengan kolom 'category'
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  image_url text,
  price numeric(10,2) NOT NULL DEFAULT 0,
  discount_price numeric(10,2),
  
  -- KOLOM BARU: Kategori
  category text, 
  
  stars numeric(3,1) DEFAULT 0,
  duration text,
  videos_duration text,
  lessons_count integer DEFAULT 0,
  language text,
  skill_level text,
  overview text,
  curriculum jsonb DEFAULT '[]'::jsonb,
  instructor jsonb DEFAULT '{}'::jsonb,
  reviews jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE UNIQUE INDEX idx_courses_slug ON public.courses (slug);