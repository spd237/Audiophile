import { useMutation, useQueryClient } from '@tanstack/react-query';
import { increaseQuantity, decreaseQuantity } from '../../services/api/api';
import { itemAdded, itemRemoved } from './cartItemsSlice';
import { useDispatch } from 'react-redux';
interface ProductOnCartProps {
  name: string;
  quantity: number;
  price: number;
  token: string | undefined;
  id: string;
}

export default function ProductOnCart({
  name,
  quantity,
  price,
  token,
  id,
}: ProductOnCartProps) {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const modifiedName = name.replaceAll('-', ' ');

  const addItemMutation = useMutation({
    mutationFn: ({ id }: { id: string }) => increaseQuantity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: ({ id }: { id: string }) => decreaseQuantity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
  });

  return (
    <div className="flex items-center">
      <img
        src={`/img/Cart/image-${name}-cart.jpg`}
        alt="product-on-cart"
        className="max-w-[64px] rounded-lg"
      />
      <div className="flex flex-col ml-2 sm:ml-4 sm:mr-5">
        <span className="text-xs sm:text-sm font-bold uppercase">
          {modifiedName}
        </span>
        <span className="text-xs sm:text-sm font-bold opacity-50">
          $ {price.toLocaleString()}
        </span>
      </div>
      <div className="bg-light-gray flex items-center justify-between min-w-[89px] h-[30px] px-3 ml-auto">
        <button
          className="opacity-25 hover:text-orange hover:opacity-100"
          onClick={
            !token
              ? () => dispatch(itemRemoved(name))
              : () => removeItemMutation.mutate({ id })
          }
        >
          -
        </button>
        <span className="text-[13px] font-bold">{quantity}</span>
        <button
          className="opacity-25 hover:text-orange hover:opacity-100"
          onClick={
            !token
              ? () => dispatch(itemAdded(name, 1, price))
              : () => addItemMutation.mutate({ id })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
