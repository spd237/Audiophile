import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CartItem } from '../types';
import { increaseQuantity, decreaseQuantity } from '../api/api';
interface ProductOnCartProps {
  name: string;
  quantity: number;
  price: number;
  setItemsOnCart: React.Dispatch<React.SetStateAction<[] | CartItem[]>>;
  token: string;
  id: string;
}

export default function ProductOnCart({
  name,
  quantity,
  price,
  setItemsOnCart,
  token,
  id,
}: ProductOnCartProps) {
  const queryClient = useQueryClient();
  const modifiedName = name.replaceAll('-', ' ');

  function handleAddItem() {
    setItemsOnCart((prevItems) => {
      return prevItems?.map((item) => {
        if (item.name === name) {
          return { ...item, quantity: quantity + 1 };
        } else return item;
      });
    });
  }

  function handleRemoveItem() {
    setItemsOnCart((prevItems) => {
      return prevItems
        ?.map((item) => {
          if (item.name === name && item.quantity > 0) {
            return { ...item, quantity: quantity - 1 };
          } else return item;
        })
        .filter((item) => item?.quantity > 0);
    });
  }

  const addItemMutation = useMutation({
    mutationFn: ({ token, id }: { token: string; id: string }) =>
      increaseQuantity(token, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
  });
  const removeItemMutation = useMutation({
    mutationFn: ({ token, id }: { token: string; id: string }) =>
      decreaseQuantity(token, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
  });

  return (
    <div className="flex items-center">
      <img
        src={`/src/assets/image-${name}-cart.jpg`}
        alt="mark 2 headphones"
        className="max-w-[64px] rounded-lg"
      />
      <div className="flex flex-col ml-4">
        <span className="text-sm font-bold uppercase">{modifiedName}</span>
        <span className="text-sm font-bold opacity-50">
          $ {price.toLocaleString()}
        </span>
      </div>
      <div className="bg-light-gray flex items-center justify-between w-[89px] h-[30px] px-3 ml-auto lg:min-w-[89px]">
        <button
          className="opacity-25"
          onClick={
            !token
              ? handleRemoveItem
              : () => removeItemMutation.mutate({ token, id })
          }
        >
          -
        </button>
        <span className="text-[13px] font-bold">{quantity}</span>
        <button
          className="opacity-25"
          onClick={
            !token ? handleAddItem : () => addItemMutation.mutate({ token, id })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
