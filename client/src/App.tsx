import Cart from './Components/Cart';
import CheckoutModal from './Components/CheckoutModal';
import Menu from './Components/Menu';
import Checkout from './pages/Checkout/Checkout';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/headphones',
    element: <Category />,
  },
  {
    path: '/earphones',
    element: <Category />,
  },
  {
    path: '/speakers',
    element: <Category />,
  },
  {
    path: '/headphones/:id',
    element: <ProductDetails />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <div className="bg-black opacity-40 h-screen w-screen fixed top-0"></div> */}
    </>
  );
}

export default App;
