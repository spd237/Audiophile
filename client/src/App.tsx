import { useRef, useState } from 'react';
import { useDetectClick } from './hooks/useDetectClick.ts';
import { Routes, Route, useLocation } from 'react-router-dom';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ScrollToTop from './utils/ScrollToTop.ts';
import Cart from './Components/Cart.tsx';
import Menu from './Components/Menu.tsx';
import Auth from './pages/Auth/Auth.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts';
import Header from './Components/Header.tsx';
import { CartItem } from './types.ts';
import CategoryWrapper from './pages/Category/CategoryWrapper.tsx';
import CheckoutWrapper from './pages/Checkout/CheckoutWrapper.tsx';
import { useAuthToken } from './hooks/useAuthToken.ts';
import { useQuery } from '@tanstack/react-query';
import { getCartItems } from './services/api/api.ts';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const token = useAuthToken();
  const location = useLocation();
  const cartRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonCartRef = useRef<HTMLButtonElement>(null);
  const buttonNavRef = useRef<HTMLButtonElement>(null);
  const [navOpen, setNavOpen] = useDetectClick(navRef, buttonNavRef);
  const [cartOpen, setCartOpen] = useDetectClick(cartRef, buttonCartRef);
  const [itemsOnCart, setItemsOnCart] = useLocalStorage<CartItem[] | []>(
    'cart',
    []
  );
  const [goingToCheckout, setGoingToCheckout] = useState(false);
  const { data } = useQuery({
    queryKey: ['cartItems', token],
    queryFn: () => getCartItems(),
    enabled: !!token,
  });

  let totalPrice = 0;
  let totalQuantity = 0;
  const cartItems = token ? data : itemsOnCart;

  cartItems?.forEach((product: CartItem) => {
    totalQuantity += product.quantity;
    totalPrice += product.quantity * product.price;
  });

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
          setItemsOnCart={setItemsOnCart}
          totalQuantity={totalQuantity}
        />
      )}
      <Cart
        cartRef={cartRef}
        setItemsOnCart={setItemsOnCart}
        setCartOpen={setCartOpen}
        setGoingToCheckout={setGoingToCheckout}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        cartItems={cartItems}
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
          element={
            <ProductDetails
              setItemsOnCart={setItemsOnCart}
              setNavOpen={setNavOpen}
            />
          }
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
              itemsOnCart={itemsOnCart}
              goingToCheckout={goingToCheckout}
              setGoingToCheckout={setGoingToCheckout}
            />
          }
        />
      </Routes>
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} navRef={navRef} />
      <AnimatePresence>
        {(cartOpen || navOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.4,
              transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                type: 'tween',
                ease: 'easeOut',
                duration: 0.15,
              },
            }}
            className="bg-black opacity-40 h-screen w-screen fixed top-0"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
