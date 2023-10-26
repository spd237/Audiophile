import cartIcon from '../assets/cart-icon.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

interface HeaderPropsType {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonNavRef: React.RefObject<HTMLButtonElement>;
  buttonCartRef: React.RefObject<HTMLButtonElement>;
}

export default function Header({
  navOpen,
  setNavOpen,
  setCartOpen,
  buttonNavRef,
  buttonCartRef,
}: HeaderPropsType) {
  return (
    <header className="relative z-10 bg-black flex justify-center">
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
          className="sm:mr-auto sm:ml-11 lg:ml-0 lg:mr-0"
        />
        <ul className="hidden lg:flex uppercase text-[13px] font-bold leading-[25px] tracking-[2px] text-white gap-[34px] mx-auto items-center ">
          <li className="cursor-pointer hover:text-orange">
            <Link to={'/'}>home</Link>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <Link to={'/headphones'}>headphones</Link>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <Link to={'/speakers'}>speakers</Link>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <Link to={'/earphones'}>earphones</Link>
          </li>
        </ul>
        <button
          onClick={() => setCartOpen((prevCartOpen) => !prevCartOpen)}
          ref={buttonCartRef}
        >
          <img src={cartIcon} alt="cart" />
        </button>
      </div>
    </header>
  );
}
