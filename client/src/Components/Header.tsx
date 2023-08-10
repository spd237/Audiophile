import cartIcon from "../assets/cart-icon.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
export default function Header() {
  return (
    <header>
      <div className="flex justify-between px-4 py-6 max-w-5xl mx-auto lg:px-0 border-b border-white border-opacity-[11%]">
        <button>
          <img src={menu} alt="menu" className="lg:hidden" />
        </button>
        <img
          src={logo}
          alt="logo"
          className="sm:mr-auto sm:ml-11 lg:ml-0 lg:mr-0"
        />
        <ul className="hidden lg:flex uppercase text-[13px] font-bold leading-[25px] tracking-[2px] text-white gap-[34px] mx-auto items-center ">
          <li className="cursor-pointer hover:text-orange">home</li>
          <li className="cursor-pointer hover:text-orange">headphones</li>
          <li className="cursor-pointer hover:text-orange">speakers</li>
          <li className="cursor-pointer hover:text-orange">earphones</li>
        </ul>
        <button>
          <img src={cartIcon} alt="cart" />
        </button>
      </div>
    </header>
  );
}
