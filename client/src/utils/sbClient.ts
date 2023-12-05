import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_API_KEY as string,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
  }
);
