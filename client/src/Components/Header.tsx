import logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';
import { supabase } from '../App';
import { CartItem } from '../types';

interface HeaderProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonNavRef: React.RefObject<HTMLButtonElement>;
  buttonCartRef: React.RefObject<HTMLButtonElement>;
  user: User | undefined;
  setGoingToCheckout: React.Dispatch<React.SetStateAction<boolean>>;
  setItemsOnCart: React.Dispatch<React.SetStateAction<[] | CartItem[]>>;
  totalQuantity: number;
}

export default function Header({
  navOpen,
  setNavOpen,
  setCartOpen,
  buttonNavRef,
  buttonCartRef,
  user,
  setGoingToCheckout,
  setItemsOnCart,
  totalQuantity,
}: HeaderProps) {
  const navigate = useNavigate();
  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <header className="relative z-10 bg-dark-gray flex justify-center items-center">
      <div className="w-full flex justify-between py-6 mx-6 sm:mx-10 lg:max-w-6xl lg:px-0 ">
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
        <img
          src={logo}
          alt="logo"
          className="ml-8 sm:mr-auto sm:ml-11 lg:ml-0 lg:mr-0"
        />
        <ul className="hidden lg:flex uppercase text-[13px] font-bold leading-[25px] tracking-[2px] text-white gap-[34px] mx-auto items-center ">
          <li className="cursor-pointer hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]">
            <Link to={'/'}>home</Link>
          </li>
          <li className="cursor-pointer hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]">
            <Link to={'/headphones'}>headphones</Link>
          </li>
          <li className="cursor-pointer hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]">
            <Link to={'/speakers'}>speakers</Link>
          </li>
          <li className="cursor-pointer hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]">
            <Link to={'/earphones'}>earphones</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 lg:gap-6">
          <button
            className="relative"
            onClick={() => setCartOpen((prevCartOpen) => !prevCartOpen)}
            ref={buttonCartRef}
          >
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group"
            >
              <g id="Combined Shape 2">
                <path
                  id="Combined Shape"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.41142 13.1946H7.41037C7.03959 13.1955 6.73829 13.491 6.73829 13.8542C6.73829 14.2179 7.04064 14.5139 7.41212 14.5139H19.6309C20.0031 14.5139 20.3047 14.8092 20.3047 15.1736C20.3047 15.538 20.0031 15.8333 19.6309 15.8333H18.4821H8.625H7.41212C6.2975 15.8333 5.39063 14.9455 5.39063 13.8542C5.39063 13.0421 5.89302 12.343 6.60914 12.0382L4.17634 1.31944H0.673829C0.301644 1.31944 0 1.02412 0 0.659722C0 0.295329 0.301644 0 0.673829 0H4.7168C5.03266 0 5.30605 0.214753 5.37467 0.516611L5.85635 2.63889H22.3262C22.5377 2.63889 22.7368 2.73613 22.8642 2.9014C22.9914 3.06668 23.0322 3.28074 22.9741 3.47986L20.2788 12.716C20.1961 12.9991 19.9317 13.1944 19.6309 13.1944H7.41405L7.41142 13.1946ZM8.625 15.8333C9.75732 15.8333 10.6786 16.7679 10.6786 17.9167C10.6786 19.0654 9.75732 20 8.625 20C7.49268 20 6.57143 19.0654 6.57143 17.9167C6.57143 16.7679 7.49268 15.8333 8.625 15.8333ZM18.4821 15.8333C19.6145 15.8333 20.5357 16.7679 20.5357 17.9167C20.5357 19.0654 19.6145 20 18.4821 20C17.3498 20 16.4286 19.0654 16.4286 17.9167C16.4286 16.7679 17.3498 15.8333 18.4821 15.8333ZM19.1225 11.875L21.4329 3.95833H6.15571L7.95259 11.875H19.1225ZM9.30952 17.9167C9.30952 17.5338 9.00238 17.2222 8.625 17.2222C8.24762 17.2222 7.94048 17.5338 7.94048 17.9167C7.94048 18.2995 8.24762 18.6111 8.625 18.6111C9.00238 18.6111 9.30952 18.2995 9.30952 17.9167ZM18.4821 17.2222C18.8595 17.2222 19.1667 17.5338 19.1667 17.9167C19.1667 18.2995 18.8595 18.6111 18.4821 18.6111C18.1048 18.6111 17.7976 18.2995 17.7976 17.9167C17.7976 17.5338 18.1048 17.2222 18.4821 17.2222Z"
                  fill="white"
                  className="group-hover:fill-orange"
                />
              </g>
            </svg>
            {totalQuantity > 0 && (
              <span className="text-white text-xs bg-orange absolute -top-2 left-3 rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </button>
          {!user ? (
            <Link to={'/auth'}>
              <button className="text-white text-[13px] leading-[25px] tracking-[2px] font-bold hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]">
                SIGN IN
              </button>
            </Link>
          ) : (
            <button
              className="text-white text-[13px] leading-[25px] tracking-[2px] font-bold hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%] "
              onClick={() => {
                localStorage.removeItem('cart');
                setItemsOnCart([]);
                setGoingToCheckout(false);
                signOut();
                navigate('/');
              }}
            >
              SIGN OUT
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
