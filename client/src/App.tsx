import { useRef } from 'react';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import CategoryPage from './pages/Category/CategoryPage.tsx';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDetectClick } from './hooks/useDetectClick.ts';
import ScrollToTop from './Components/ScrollToTop.ts';

function App() {
  const cartRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonCartRef = useRef<HTMLButtonElement>(null);
  const buttonNavRef = useRef<HTMLButtonElement>(null);
  const [navOpen, setNavOpen] = useDetectClick(navRef, buttonNavRef);
  const [cartOpen, setCartOpen] = useDetectClick(cartRef, buttonCartRef);

  const commonProps = {
    navOpen,
    setNavOpen,
    cartOpen,
    setCartOpen,
    cartRef,
    navRef,
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
            element={<ProductDetails {...commonProps} />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
