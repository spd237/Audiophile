import { useState } from 'react';
import { supabase } from '../../App';
import { useMutation } from '@tanstack/react-query';
import { createUser, updateUser } from '../../api/api';
import { AuthData, CartItem } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserData, UserSchema } from '../../models/UserSchema';
import { zodResolver } from '@hookform/resolvers/zod';

interface AuthProps {
  itemsOnCart: CartItem[] | [];
  goingToCheckout: boolean;
  setGoingToCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}

function Auth({ itemsOnCart, goingToCheckout, setGoingToCheckout }: AuthProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(UserSchema),
  });
  const email = watch('email');
  const password = watch('password');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const authMutation = useMutation({
    mutationFn: ({
      id,
      cartItems,
    }: {
      id: string | undefined;
      cartItems: CartItem[] | [];
    }) => (isSigningUp ? createUser(id, cartItems) : updateUser(id, cartItems)),
  });

  function handlePostAuth(data: AuthData) {
    authMutation.mutate({ id: data.user?.id, cartItems: itemsOnCart });
    if (goingToCheckout) {
      setGoingToCheckout(false);
      navigate('/checkout');
    } else navigate(-1);
  }

  async function handleAuthentication() {
    try {
      if (isSigningUp) {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) {
          throw error;
        } else {
          handlePostAuth(data);
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (error) {
          throw error;
        } else {
          handlePostAuth(data);
        }
      }
    } catch (error) {
      console.error('Auth error: ', error);
    }
  }

  return (
    <div className="w-full h-screen bg-dark-gray">
      <form
        className="fixed w-80 h-80 left-0 right-0 m-auto top-[30%] flex flex-col items-center justify-center bg-gray-50 gap-4 z-10 rounded-lg"
        onSubmit={handleSubmit(handleAuthentication)}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="border border-orange"
          {...register('email')}
        />
        <span className="text-sm font-medium text-error-red">
          {errors.email?.message}
        </span>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="border border-orange"
          {...register('password')}
        />
        <span className="text-sm font-medium text-error-red">
          {errors.password?.message}
        </span>
        <button
          className="bg-orange px-4 py-2 uppercase text-white tracking-wide font-bold w-[7rem]"
          type="submit"
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
