import { User } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

export function useAuthToken(user: User | undefined) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem(
      'sb-gfgywzotuybpcpuqczfi-auth-token'
    );
    const supabaseAuthData = storedValue ? JSON.parse(storedValue) : '';
    setToken(supabaseAuthData.access_token);
  }, [user]);

  return token;
}
