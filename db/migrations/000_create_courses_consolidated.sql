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

-- Tabel Keranjang Belanja (Cart)
CREATE TABLE IF NOT EXISTS public.cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id) -- Mencegah duplikasi item di keranjang
);

-- Tabel Pendaftaran Kursus (Enrollment/Ownership)
CREATE TABLE IF NOT EXISTS public.enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  enrolled_at timestamptz DEFAULT now(),
  status text DEFAULT 'active',
  UNIQUE(user_id, course_id)
);