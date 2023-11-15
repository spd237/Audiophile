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
        />
      )}
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
            setCartOpen={setCartOpen}
            user={user}
            token={token}
            setGoingToCheckout={setGoingToCheckout}
          />{' '}
          <div className="bg-black opacity-40 h-screen w-screen fixed top-0"></div>
        </>
      )}
    </>
  );
}

export default App;
