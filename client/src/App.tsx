import { useRef, useState } from 'react';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import CategoryPage from './pages/Category/CategoryPage.tsx';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDetectClick } from './hooks/useDetectClick.ts';
import ScrollToTop from './Components/ScrollToTop.ts';
import Cart from './Components/Cart.tsx';
import Menu from './Components/Menu.tsx';
import Auth from './Components/Auth.tsx';

function App() {
  const cartRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonCartRef = useRef<HTMLButtonElement>(null);
  const buttonNavRef = useRef<HTMLButtonElement>(null);
  const [navOpen, setNavOpen] = useDetectClick(navRef, buttonNavRef);
  const [cartOpen, setCartOpen] = useDetectClick(cartRef, buttonCartRef);
  const [itemsOnCart, setItemsOnCart] = useState<
    | {
        item: string;
        quantity: number;
        price: number;
      }[]
    | undefined
  >();
  const commonProps = {
    navOpen,
    setNavOpen,
    setCartOpen,
    buttonCartRef,
    buttonNavRef,
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home {...commonProps} />} />
          <Route
            path="/:category"
            element={<CategoryPage {...commonProps} />}
          />
          <Route
            path="/product-details/:product"
            element={
              <ProductDetails
                {...commonProps}
                setItemsOnCart={setItemsOnCart}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {navOpen && (
          <>
            {' '}
            <Menu setNavOpen={setNavOpen} navRef={navRef} />
            <div className="bg-black opacity-40 h-screen w-screen fixed top-0"></div>
          </>
        )}
        {cartOpen && (
          <>
            <Cart
              cartRef={cartRef}
              itemsOnCart={itemsOnCart}
              setItemsOnCart={setItemsOnCart}
            />{' '}
            <div className="bg-black opacity-40 h-screen w-screen fixed top-0"></div>
          </>
        )}
        {/* <Auth /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
