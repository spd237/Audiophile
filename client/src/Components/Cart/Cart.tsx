import ProductOnCart from './ProductOnCart';
import { CartItem } from '../../types';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthToken } from '../../hooks/useAuthToken';
import {
  removeAll,
  selectCartItems,
  useGetCartItemsQuery,
  useRemoveAllItemsMutation,
} from './cartItemsSlice';
import { useDispatch, useSelector } from 'react-redux';

interface CartProps {
  cartRef: React.RefObject<HTMLDivElement>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGoingToCheckout: React.Dispatch<React.SetStateAction<boolean>>;
  cartOpen: boolean;
}

export default function Cart({
  cartRef,
  setCartOpen,
  setGoingToCheckout,
  cartOpen,
}: CartProps) {
  const navigate = useNavigate();
  const token = useAuthToken();
  const dispatch = useDispatch();
  const [removeAllItems] = useRemoveAllItemsMutation();
  const cartItems = useSelector(selectCartItems).filter(
    (item) => item.quantity > 0
  );
  const { data } = useGetCartItemsQuery(undefined, { skip: !token });

  const totalQuantity = !token
    ? cartItems.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0)
    : data?.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0);

  const totalPrice = !token
    ? cartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0)
    : data?.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);

  async function handleRemoveAll() {
    try {
      await removeAllItems();
    } catch (err) {
      console.error('Failed to remove items', err);
    }
  }

  function createProductComponent(item: CartItem) {
    return (
      <ProductOnCart
        key={uuidv4()}
        id={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        token={token}
      />
    );
  }

  const productsOnCart = !token
    ? cartItems.map((item: CartItem) => createProductComponent(item))
    : data?.map((item) => createProductComponent(item));

  return (
    <div className="mx-6 sm:mx-10 lg:max-w-6xl xl:mx-auto relative top-0 flex justify-end">
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ y: -8, opacity: 0 }}
            animate={{
              y: 8,
              opacity: 1,
              transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.15,
              },
            }}
            exit={{
              y: -6,
              opacity: 0,
              transition: {
                type: 'tween',
                ease: 'easeOut',
                duration: 0.15,
              },
            }}
            className="min-w-[327px]  absolute bg-white rounded-lg mx-auto left-0 right-0 max-w-xs z-10 px-7 py-8 sm:max-w-sm h-auto sm:left-auto"
            ref={cartRef}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold tracking-[1.2px] uppercase">
                cart<span>({totalQuantity || 0})</span>
              </span>
              {!totalQuantity ? (
                ''
              ) : (
                <button
                  className="text-[15px] font-medium opacity-50 underline hover:text-orange hover:opacity-100"
                  onClick={() => {
                    !token ? dispatch(removeAll()) : handleRemoveAll();
                  }}
                >
                  Remove All
                </button>
              )}
            </div>
            {!totalQuantity ? (
              <span className="block ml-20 my-16">Cart is empty.</span>
            ) : (
              <>
                <div className="flex flex-col gap-6 my-8">{productsOnCart}</div>
                <div>
                  <div className="flex justify-between">
                    <span className="text-[15px] font-medium opacity-50 uppercase">
                      total
                    </span>
                    <span className="text-lg font-bold">
                      $ {totalPrice?.toLocaleString()}
                    </span>
                  </div>
                  <button
                    className="bg-orange text-white text-[13px] font-bold tracking-[1px] uppercase w-full py-4 mt-6 border-2 border-orange shadow-[inset_0_0_0_0_#ffffff] hover:shadow-[inset_328px_0_0_0_#ffffff] transition-all duration-200 ease-in hover:text-orange"
                    onClick={() => {
                      setCartOpen(false);
                      setGoingToCheckout(
                        (prevGoingToCheckout) => !prevGoingToCheckout
                      );
                      !token ? navigate('/auth') : navigate('/checkout');
                    }}
                  >
                    checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
