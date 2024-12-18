import { SupabaseClient, createClient } from "@supabase/supabase-js";

const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
if (!url || !key) {
  console.error("Missing Supabase environment variables.");
}

const supabase: SupabaseClient = createClient(url, key);

export default supabase;
