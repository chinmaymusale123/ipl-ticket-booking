import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rssdldckyaplmlvpiaqt.supabase.co";
const supabaseKey = "sb_publishable_m5Zr-1DGjc1_N8lO6rAW2A_R88IqFxT";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);

