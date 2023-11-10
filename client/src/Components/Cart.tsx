import { User } from '@supabase/supabase-js';
import { CartItem } from '../types';
import ProductOnCart from './ProductOnCart';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCartItems, removeAllItems } from '../api/api';
import { v4 as uuidv4 } from 'uuid';

interface CartProps {
  cartRef: React.RefObject<HTMLDivElement>;
  itemsOnCart: CartItem[] | [];
  setItemsOnCart: React.Dispatch<React.SetStateAction<[] | CartItem[]>>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | undefined;
  token: string;
  setGoingToCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Cart({
  cartRef,
  itemsOnCart,
  setItemsOnCart,
  setCartOpen,
  user,
  token,
  setGoingToCheckout,
}: CartProps) {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['cartItems', token],
    queryFn: () => getCartItems(token),
    enabled: !!token,
  });

  const navigate = useNavigate();
  let totalQuantity = 0;
  let totalPrice = 0;

  user
    ? data?.cartItems?.forEach((product: CartItem) => {
        totalQuantity += product.quantity;
      })
    : itemsOnCart?.forEach((product) => {
        totalQuantity += product.quantity;
      });

  user
    ? data?.cartItems?.forEach((product: CartItem) => {
        totalPrice += product.quantity * product.price;
      })
    : itemsOnCart?.forEach((product) => {
        totalPrice += product.quantity * product.price;
      });

  const removeAllMutation = useMutation({
    mutationFn: ({ token }: { token: string }) => removeAllItems(token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
  });

  const productsOnCart =
    data && user
      ? data.cartItems.map((item: CartItem, index: number) => (
          <ProductOnCart
            key={index}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            setItemsOnCart={setItemsOnCart}
            token={token}
          />
        ))
      : itemsOnCart?.map((item, index) => (
          <ProductOnCart
            key={index}
            id={uuidv4()}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            setItemsOnCart={setItemsOnCart}
            token={token}
          />
        ));
  return (
    <div
      className="absolute top-24 bg-white rounded-lg mx-auto left-0 right-0 max-w-xs z-10 px-7 py-8 sm:max-w-sm sm:left-[21.5rem] lg:left-[48rem] min-h-[15rem]"
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
            className="text-[15px] font-medium opacity-50 underline"
            onClick={() => {
              !token ? setItemsOnCart([]) : removeAllMutation.mutate({ token });
            }}
          >
            Remove All
          </button>
        )}
      </div>
      {!totalQuantity ? (
        <div className="ml-28 mt-14">Cart is empty.</div>
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
              className="bg-orange text-white text-[13px] font-bold tracking-[1px] uppercase w-full py-4 mt-6"
              onClick={() => {
                setCartOpen(false);
                setGoingToCheckout(
                  (prevGoingToCheckout) => !prevGoingToCheckout
                );
                !user ? navigate('/auth') : navigate('/checkout');
              }}
            >
              checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
