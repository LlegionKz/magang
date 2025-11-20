# Demo seeding & verification

File ini berisi langkah-langkah cepat untuk melakukan pengisian data demo (courses, profile, cart) dan cara memeriksa bahwa integrasi yang telah dibuat bekerja.

Prasyarat
- Node.js terpasang
- `SUPABASE_SERVICE_ROLE_KEY` dan `SUPABASE_URL` tersedia (Supabase project)
- `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY` untuk client

Langkah 1 — Siapkan environment lokal
1. Salin ` .env.local.example` menjadi `.env.local` di root proyek:

```powershell
copy .env.local.example .env.local
# (atau pada bash) cp .env.local.example .env.local
```

2. Buka `.env.local` dan isi variabel dengan nilai dari dashboard Supabase.

Langkah 2 — Buat tabel (jika belum)
- Jika Anda belum menjalankan migration, buka SQL Editor di Supabase dan jalankan isi file `db/migrations/001_create_tables.sql`.

Langkah 3 — Isi data demo
1. Jalankan seeding script:

```powershell
node scripts/demo-seed.js
```

Skrip akan membuat:
- profile demo dengan id `11111111-1111-1111-1111-111111111111`
- dua course demo (`demo-intro-node`, `demo-react-basics`)
- satu cart_items yang mengaitkan profile demo dengan course pertama

Langkah 4 — Jalankan aplikasi dan uji
1. Jalankan dev server:

```powershell
npm install
npm run dev
```

2. Buka browser ke `http://localhost:3000/course` — halaman Course akan mengambil data dari `/api/courses` (yang membaca tabel `courses`). Anda harus melihat kursus demo.

3. Untuk menguji cart sebagai user ter-autentikasi:
   - Gunakan Supabase Auth (Sign Up / Sign In) di aplikasi; jika ingin langsung berfungsi dengan profile demo, Anda dapat membuat session manual di Supabase atau menambahkan login untuk user dengan id demo (lebih aman: daftarkan email via Supabase, lalu login).
   - Setelah login, buka `http://localhost:3000/cart` — halaman Cart akan memanggil `/api/cart` dan menampilkan `cart_items` untuk user yang login.

Langkah 5 — Verifikasi di Supabase GUI
1. Buka Supabase dashboard → Table Editor → pilih tabel `courses` dan `cart_items`.
2. Pastikan baris yang disisipkan oleh skrip ada.

Catatan keamanan
- Jangan commit `.env.local` ke repositori.
- Pastikan `SUPABASE_SERVICE_ROLE_KEY` hanya disimpan di server/CI/secret manager, bukan pada client.

Jika ada masalah: periksa log Node (terminal) untuk error. Untuk error koneksi Supabase, pastikan variabel env sudah benar.
