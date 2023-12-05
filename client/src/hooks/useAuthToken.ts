import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export function useAuthToken() {
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    async function handleUser() {
      const { data, error } = await supabase.auth.getSession();
      if (data) {
        setToken(data.session?.access_token);
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_IN') {
            setToken(session?.access_token);
          } else if (event === 'SIGNED_OUT') {
            setToken(undefined);
          }
        });
        return () => {
          subscription.unsubscribe();
        };
      } else if (error) {
        throw new Error();
      }
    }
    handleUser().catch((e) => console.error(e));
  }, []);

  return token;
}
