import { useEffect, useState } from 'react';
import { supabase } from '../../App';
import { useMutation } from '@tanstack/react-query';
import { createUser, updateUser } from '../../api/api';
import { AuthData, CartItem } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserData, UserSchema } from '../../models/UserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { TailSpin } from 'react-loader-spinner';

export interface AuthProps {
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
  const [authError, setAuthError] = useState<string>();

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
      if (error instanceof Error) {
        setAuthError(error.message);
      }
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAuthError('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [authError]);

  return (
    <div className="w-full h-screen bg-dark-gray flex justify-center items-center">
      <AnimatePresence>
        {authError && (
          <motion.div
            key="error-msg"
            layout
            initial={{ y: -20, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-red-200 max-w-[250px] mx-auto absolute top-4 left-0 right-0 flex justify-evenly items-center p-2 rounded gap-2"
          >
            <FontAwesomeIcon
              icon={faCircleExclamation}
              style={{ color: '#ff0000' }}
            />
            <span className="text-red-600 font-bold text-center">
              {authError || errors.email?.message || errors.password?.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <form
        className="flex flex-col items-center justify-center gap-8 z-10 rounded-lg"
        onSubmit={handleSubmit(handleAuthentication)}
      >
        <div className="text-orange uppercase tracking-wider font-semibold  text-base">
          {isSigningUp ? 'Create an account' : 'Sign In to Audiophile'}
        </div>
        <div className="flex flex-col gap-4 min-w-[250px]">
          <label className="flex flex-col gap-2 w-full">
            <input
              type="text"
              id="email"
              className="border-b border-white focus:border-orange bg-transparent focus:outline-none text-white placeholder:text-gray-500 p-1 "
              placeholder="email"
              {...register('email')}
            />
            {errors.email?.message && (
              <span className="text-error-red text-xs font-medium">
                {errors.email?.message}
              </span>
            )}
          </label>
          <label className="flex flex-col gap-2 w-full">
            <input
              type="password"
              className="border-b border-white focus:border-orange bg-transparent focus:outline-none text-white placeholder:text-gray-500 p-1"
              placeholder="password"
              {...register('password')}
            />
            {errors.password?.message && (
              <span className="text-error-red text-xs font-medium">
                {errors.password?.message}
              </span>
            )}
          </label>
        </div>

        {authMutation.isLoading ? (
          <TailSpin
            height="25"
            width="25"
            color="#D87D4A"
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        ) : (
          <button
            className="bg-transparent hover:bg-orange hover:bg-opacity-10 border rounded-sm border-orange uppercase px-6 py-1 text-orange tracking-wide font-bold min-w-[5rem] mt-4"
            type="submit"
          >
            {isSigningUp ? 'sign up' : 'sign in'}
          </button>
        )}

        <div>
          <span className="text-gray-200">
            {isSigningUp ? 'Already have an account?' : 'Need an account?'}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsSigningUp((prevIsSigninUp) => !prevIsSigninUp);
              }}
              className="ml-1 underline text-orange font-medium"
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
