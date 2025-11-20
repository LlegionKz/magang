INSERT INTO public.courses (
  title, slug, image_url, price, discount_price, 
  category, -- Kolom kategori diisi di sini
  stars, duration, videos_duration, lessons_count, language, skill_level, overview, curriculum, instructor, reviews
) 
VALUES 
-- 1. DEVELOPMENT
(
  'Demo: Intro to Node.js',
  'demo-intro-node',
  'https://drive.google.com/uc?id=1uNgVcJcVdH0XGEymUekukJ_pRo0YxrWd',
  80.20, 94.99,
  'Development', -- Kategori
  4.5, '20 Hours', '10 Hours', 24, 'English', 'Beginner',
  '<p>Intro to Node.js overview...</p>',
  '[{"title": "Module 1", "items": ["Intro"]}]'::jsonb,
  '{"name": "Rafi Nur", "avatar": "..."}'::jsonb,
  '[{"user": "Sarah", "rating": 5, "comment": "Good"}]'::jsonb
),
(
  'Mastering React & Next.js 14',
  'mastering-react-nextjs',
  'https://drive.google.com/uc?id=1uNgVcJcVdH0XGEymUekukJ_pRo0YxrWd',
  120.00, 150.00,
  'Development', -- Kategori
  4.8, '35 Hours', '25 Hours', 42, 'Indonesian', 'Intermediate',
  '<p>React overview...</p>',
  '[{"title": "Hooks", "items": ["useEffect"]}]'::jsonb,
  '{"name": "Nathanael Rico", "avatar": "..."}'::jsonb,
  '[{"user": "Andi", "rating": 5, "comment": "Nice"}]'::jsonb
),

-- 2. UI/UX DESIGN
(
  'UI/UX Design Masterclass',
  'ui-ux-design-masterclass',
  'https://drive.google.com/uc?id=1uNgVcJcVdH0XGEymUekukJ_pRo0YxrWd',
  99.00, null,
  'UI/UX Design', -- Kategori
  4.7, '15 Hours', '12 Hours', 18, 'English', 'All Levels',
  '<p>UI/UX overview...</p>',
  '[{"title": "Figma", "items": ["Auto Layout"]}]'::jsonb,
  '{"name": "Faiza Tanjia", "avatar": "..."}'::jsonb,
  '[{"user": "Jess", "rating": 5, "comment": "Cool"}]'::jsonb
),

-- 3. DIGITAL MARKETING
(
  'Complete Digital Marketing Guide',
  'digital-marketing-guide',
  'https://drive.google.com/uc?id=1uNgVcJcVdH0XGEymUekukJ_pRo0YxrWd',
  50.00, 75.00,
  'Digital Marketing', -- Kategori
  4.2, '10 Hours', '8 Hours', 15, 'English', 'Beginner',
  '<p>Learn SEO, SEM, and Social Media Marketing.</p>',
  '[{"title": "SEO", "items": ["Keywords", "Backlinks"]}]'::jsonb,
  '{"name": "Marketing Pro", "avatar": "..."}'::jsonb,
  '[{"user": "Budi", "rating": 4, "comment": "Informative"}]'::jsonb
),

-- 4. VIDEO EDITING
(
  'Video Editing with DaVinci Resolve',
  'davinci-resolve-editing',
  'https://drive.google.com/uc?id=1uNgVcJcVdH0XGEymUekukJ_pRo0YxrWd',
  65.00, null,
  'Video Editing', -- Kategori
  4.9, '18 Hours', '18 Hours', 30, 'English', 'Intermediate',
  '<p>Professional color grading and editing.</p>',
  '[{"title": "Color Grading", "items": ["Nodes", "Scopes"]}]'::jsonb,
  '{"name": "Editor Handal", "avatar": "..."}'::jsonb,
  '[{"user": "Siti", "rating": 5, "comment": "Cinematic!"}]'::jsonb
),

-- 5. GRAPHIC DESIGN
(
  'Adobe Illustrator Essentials',
  'adobe-illustrator-essentials',
  'https://drive.google.com/uc?id=1uNgVcJcVdH0XGEymUekukJ_pRo0YxrWd',
  45.00, 60.00,
  'Graphic Design', -- Kategori
  4.6, '12 Hours', '10 Hours', 20, 'Indonesian', 'Beginner',
  '<p>Create stunning vector graphics.</p>',
  '[{"title": "Tools", "items": ["Pen Tool", "Shapes"]}]'::jsonb,
  '{"name": "Desainer Grafis", "avatar": "..."}'::jsonb,
  '[{"user": "Rina", "rating": 4, "comment": "Good start"}]'::jsonb
),

-- 6. SELF IMPROVEMENT
(
  'Productivity & Time Management',
  'productivity-mastery',
  'https://drive.google.com/uc?id=1uNgVcJcVdH0XGEymUekukJ_pRo0YxrWd',
  30.00, null,
  'Self Improvement', -- Kategori
  4.8, '5 Hours', '5 Hours', 10, 'English', 'All Levels',
  '<p>Get more done in less time.</p>',
  '[{"title": "Habits", "items": ["Atomic Habits"]}]'::jsonb,
  '{"name": "Life Coach", "avatar": "..."}'::jsonb,
  '[{"user": "Doni", "rating": 5, "comment": "Life changing"}]'::jsonb
);