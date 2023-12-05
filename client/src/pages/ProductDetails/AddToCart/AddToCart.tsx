import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartItem } from '../../../types';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToCart } from '../../../api/api';

interface AddToCartProps {
  price: number | undefined;
  setItemsOnCart: React.Dispatch<React.SetStateAction<[] | CartItem[]>>;
  token: string | undefined;
  setAddToCartStatus: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddToCart({
  price,
  setItemsOnCart,
  token,
  setAddToCartStatus,
}: AddToCartProps) {
  const queryClient = useQueryClient();
  const productName = useParams().product;
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    if (productName && price) {
      setItemsOnCart((prevItems) => {
        if (!prevItems) prevItems = [];
        if (prevItems.find((item) => item.name === productName)) {
          return prevItems.map((item) => {
            if (item.name === productName) {
              return {
                ...item,
                quantity: item.quantity + quantity,
              };
            } else {
              return item;
            }
          });
        } else {
          return [
            ...prevItems,
            {
              id: uuidv4(),
              name: productName,
              quantity: quantity,
              price: price,
            },
          ];
        }
      });
      setAddToCartStatus('Item added to cart successfully.');
    } else {
      setAddToCartStatus('There was an error. Please try again.');
    }
  }

  const addToCartMutation = useMutation({
    mutationFn: ({
      name,
      quantity,
      price,
    }: {
      token: string;
      name: string | undefined;
      quantity: number;
      price: number | undefined;
    }) => addToCart(name, quantity, price),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
      setAddToCartStatus('Item added to cart successfully.');
    },
    onError: () => {
      setAddToCartStatus('There was an error. Please try again.');
    },
  });

  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="font-bold text-lg tracking-[1.2px]">
        $ {price?.toLocaleString()}
      </div>
      <div className="w-full flex gap-4">
        <div className="bg-light-gray flex py-3 px-4 gap-5 justify-between items-center w-[120px]">
          <button
            className="opacity-25 hover:text-orange hover:opacity-100"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="text-[13px] font-bold" title="quantity">
            {quantity}
          </span>
          <button
            className="opacity-25 hover:text-orange hover:opacity-100"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="bg-orange uppercase font-bold text-white py-3 px-8 text-[13px]  border-2 border-orange shadow-[inset_0_0_0_0_#ffffff] hover:shadow-[inset_160px_0_0_0_#ffffff] transition-shadow duration-200 ease-in hover:text-orange"
          onClick={() => {
            if (!token) {
              handleAddToCart();
            } else if (token && quantity > 0) {
              addToCartMutation.mutate({
                token: token,
                name: productName,
                quantity: quantity,
                price: price,
              });
            }
            setQuantity(1);
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
