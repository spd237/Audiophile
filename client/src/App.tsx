import { useEffect, useRef, useState } from 'react';
import { useDetectClick } from './hooks/useDetectClick.ts';
import { Routes, Route, useLocation } from 'react-router-dom';
import { User, createClient } from '@supabase/supabase-js';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ScrollToTop from './Components/ScrollToTop.ts';
import Cart from './Components/Cart.tsx';
import Menu from './Components/Menu.tsx';
import Auth from './Components/Auth/Auth.tsx';
import useLocalStorage from './hooks/useLocalStorage.ts';
import Header from './Components/Header.tsx';
import { CartItem } from './types.ts';
import CategoryWrapper from './pages/Category/CategoryWrapper.tsx';
import CheckoutWrapper from './pages/Checkout/CheckoutWrapper.tsx';
import { useAuthToken } from './hooks/useAuthToken.ts';
import { useQuery } from '@tanstack/react-query';
import { getCartItems } from './api/api.ts';
import { AnimatePresence, motion } from 'framer-motion';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_API_KEY
);

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const token = useAuthToken(user);
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
    queryFn: () => getCartItems(token),
    enabled: !!token,
  });

  let totalPrice = 0;
  let totalQuantity = 0;
  const cartItems = token ? data : itemsOnCart;

  cartItems?.forEach((product: CartItem) => {
    totalQuantity += product.quantity;
    totalPrice += product.quantity * product.price;
  });

  useEffect(() => {
    async function handleUser() {
      const { data, error } = await supabase.auth.getSession();
      if (data) {
        setUser(data.session?.user);
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_IN') {
            setUser(session?.user);
          } else if (event === 'SIGNED_OUT') {
            setUser(undefined);
          }
        });
        return () => {
          subscription.unsubscribe();
        };
      } else if (error) {
        console.log(error);
      }
    }
    handleUser();
  }, []);

  console.log(location.pathname);

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
          user={user}
          setGoingToCheckout={setGoingToCheckout}
          setItemsOnCart={setItemsOnCart}
          totalQuantity={totalQuantity}
        />
      )}
      <AnimatePresence>
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
                token={token}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckoutWrapper>
                <Checkout token={token} />
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
      </AnimatePresence>
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} navRef={navRef} />
      <Cart
        cartRef={cartRef}
        setItemsOnCart={setItemsOnCart}
        setCartOpen={setCartOpen}
        token={token}
        setGoingToCheckout={setGoingToCheckout}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        cartItems={cartItems}
        cartOpen={cartOpen}
      />
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
