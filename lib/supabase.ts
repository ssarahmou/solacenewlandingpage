import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").trim().replace(/^["']|["']$/g, "");
const key = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim().replace(/^["']|["']$/g, "");

const isValidHttpUrl =
  url.startsWith("https://") || url.startsWith("http://");

/** Null when env is missing or URL is invalid — avoids crashing the app at import time */
export const supabase: SupabaseClient | null =
  isValidHttpUrl && key ? createClient(url, key) : null;
