import { SupabaseClient, createClient } from "@supabase/supabase-js";

const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Debugging environment variables
console.log("[Supabase URL]:", url);
console.log("[Supabase Key]:", key);

if (!url || !key) {
  console.error("Missing Supabase environment variables.");
}

const supabase: SupabaseClient = createClient(url, key);
console.log("Supabase client initialized successfully");

export default supabase;
