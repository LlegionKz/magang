import { createClient } from '@supabase/supabase-js'

// Prefer environment variables. Fall back to the values you provided so
// local builds still work if .env isn't loaded. If you would rather keep
// secrets out of source control, remove the fallback values and make sure
// to set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in
// your environment (or .env.local).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://umonjfakbneurpzzqzvf.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtb25qZmFrYm5ldXJwenpxenZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNjYzODksImV4cCI6MjA3Nzg0MjM4OX0.XT8BhqOuKkby9fv5uUIZjp0MB2jQwcNac195BwGCKg0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
