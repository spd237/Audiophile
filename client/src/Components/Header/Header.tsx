import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';
import { motion } from 'framer-motion';
import { useAuthToken } from '../../hooks/useAuthToken';
import { useSelector } from 'react-redux';
import { selectCartItems, useGetCartItemsQuery } from '../Cart/cartItemsSlice';
import Nav from './Nav';
import OpenCartBtn from '../Cart/OpenCartBtn';

interface HeaderProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonNavRef: React.RefObject<HTMLButtonElement>;
  buttonCartRef: React.RefObject<HTMLButtonElement>;
  setGoingToCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  navOpen,
  setNavOpen,
  setCartOpen,
  buttonNavRef,
  buttonCartRef,
  setGoingToCheckout,
}: HeaderProps) {
  const token = useAuthToken();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const { data } = useGetCartItemsQuery(undefined, { skip: !token });

  const totalQuantity = !token
    ? cartItems.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0)
    : data?.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0);

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <header className="relative z-10 bg-dark-gray flex justify-center items-center">
      <div className="w-full flex justify-between py-6 mx-6 sm:mx-10 lg:max-w-6xl lg:px-0 border-b border-white border-opacity-20">
        <button
          onClick={() => setNavOpen((prevNavOpen) => !prevNavOpen)}
          ref={buttonNavRef}
          className="lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <rect
              width="16"
              height="3"
              fill="white"
              className={`${navOpen ? 'top' : ''} duration-500 origin-center`}
            />
            <rect
              y="6"
              width="16"
              height="3"
              fill="white"
              className={`${
                navOpen ? 'middle' : ''
              } duration-500 origin-center`}
            />
            <rect
              y="12"
              width="16"
              height="3"
              fill="white"
              className={`${
                navOpen ? 'bottom' : ''
              } duration-500 origin-center`}
            />
          </svg>
        </button>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          }}
          src={logo}
          alt="logo"
          className="ml-8 sm:mr-auto sm:ml-11 lg:ml-0 lg:mr-0 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <Nav />
        <div className="flex items-center gap-4 lg:gap-6">
          <OpenCartBtn
            buttonCartRef={buttonCartRef}
            setCartOpen={setCartOpen}
            totalQuantity={totalQuantity}
          />
          {!token ? (
            <Link to={'/auth'}>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    ease: 'easeIn',
                    delay: 0.5,
                  },
                }}
                className="text-white text-[13px] leading-[25px] tracking-[2px] font-bold hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]"
              >
                SIGN IN
              </motion.button>
            </Link>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  ease: 'easeIn',
                  delay: 0.5,
                },
              }}
              className="text-white text-[13px] leading-[25px] tracking-[2px] font-bold hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%] "
              onClick={() => {
                localStorage.removeItem('cart');
                setGoingToCheckout(false);
                signOut();
                navigate('/');
              }}
            >
              SIGN OUT
            </motion.button>
          )}
        </div>
      </div>
    </header>
  );
}
