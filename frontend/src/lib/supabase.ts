import { createClient } from "@supabase/supabase-js";

// Substitua pelos valores que você encontra no seu painel do Supabase
// (Project Settings -> API)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
