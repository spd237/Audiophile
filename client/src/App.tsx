import { useRef, useState } from 'react';
import { useDetectClick } from './hooks/useDetectClick.ts';
import { Routes, Route, useLocation } from 'react-router-dom';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ScrollToTop from './utils/ScrollToTop.ts';
import Cart from './Components/Cart/Cart.tsx';
import Menu from './Components/Menu.tsx';
import Auth from './pages/Auth/Auth.tsx';
import Header from './Components/Header/Header.tsx';
import CategoryWrapper from './pages/Category/CategoryWrapper.tsx';
import CheckoutWrapper from './pages/Checkout/CheckoutWrapper.tsx';
import Overlay from './Components/Animations/Overlay.tsx';

function App() {
  const location = useLocation();
  const cartRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonCartRef = useRef<HTMLButtonElement>(null);
  const buttonNavRef = useRef<HTMLButtonElement>(null);
  const [navOpen, setNavOpen] = useDetectClick(navRef, buttonNavRef);
  const [cartOpen, setCartOpen] = useDetectClick(cartRef, buttonCartRef);
  const [goingToCheckout, setGoingToCheckout] = useState(false);

  return (
    <>
      <ScrollToTop />
      {location.pathname !== '/auth' && (
        <Header
          navOpen={navOpen}
          setCartOpen={setCartOpen}
          buttonCartRef={buttonCartRef}
          buttonNavRef={buttonNavRef}
          setNavOpen={setNavOpen}
          setGoingToCheckout={setGoingToCheckout}
        />
      )}
      <Cart
        cartRef={cartRef}
        setCartOpen={setCartOpen}
        setGoingToCheckout={setGoingToCheckout}
        cartOpen={cartOpen}
      />
      <Routes>
        <Route path="/" element={<Home setNavOpen={setNavOpen} />} />
        <Route
          path="/:category"
          element={<CategoryWrapper setNavOpen={setNavOpen} />}
        />
        <Route
          path="/product-details/:product"
          element={<ProductDetails setNavOpen={setNavOpen} />}
        />
        <Route
          path="/checkout"
          element={
            <CheckoutWrapper>
              <Checkout />
            </CheckoutWrapper>
          }
        />
        <Route
          path="/auth"
          element={
            <Auth
              goingToCheckout={goingToCheckout}
              setGoingToCheckout={setGoingToCheckout}
            />
          }
        />
      </Routes>
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} navRef={navRef} />
      <Overlay cartOpen={cartOpen} navOpen={navOpen} />
    </>
  );
}

export default App;
