import { useState } from 'react';
import { supabase } from '../../App';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../../api/api';
import { CartItem } from '../../types';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  itemsOnCart: CartItem[] | [];
  goingToCheckout: boolean;
  setGoingToCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}

function Auth({ itemsOnCart, goingToCheckout, setGoingToCheckout }: AuthProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const mutation = useMutation({
    mutationFn: ({
      id,
      cartItems,
    }: {
      id: string | undefined;
      cartItems: CartItem[] | [];
    }) => createUser(id, cartItems),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  async function handleAuthentication(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      if (isSigningUp) {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) {
          throw error;
        } else {
          console.log(data);
          mutation.mutate({ id: data.user?.id, cartItems: itemsOnCart });
          if (goingToCheckout) {
            setGoingToCheckout(false);
            navigate('/checkout');
          } else navigate(-1);
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (error) {
          throw error;
        } else {
          console.log(data);
          if (goingToCheckout) navigate('/checkout');
          else navigate(-1);
        }
      }
    } catch (error) {
      console.error('Auth error: ', error);
    }
  }

  return (
    <div className="w-full h-screen bg-dark-gray">
      <form className="fixed w-80 h-80 left-0 right-0 m-auto top-[30%] flex flex-col items-center justify-center bg-gray-50 gap-4 z-10 rounded-lg">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-orange"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="border border-orange"
          minLength={6}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-orange px-4 py-2 uppercase text-white tracking-wide font-bold w-[7rem]"
          onClick={handleAuthentication}
        >
          {isSigningUp ? 'sign up' : 'sign in'}
        </button>
        <div>
          <span>
            {isSigningUp ? 'Already have an account?' : 'Need an account?'}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsSigningUp((prevIsSigninUp) => !prevIsSigninUp);
              }}
              className="ml-1 underline"
            >
              {isSigningUp ? 'Sign In' : 'Sign Up'}
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Auth;
