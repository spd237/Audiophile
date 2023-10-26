import { useState } from 'react';
import { useParams } from 'react-router-dom';

interface AddToCartProps {
  price: number | undefined;
  setItemsOnCart: React.Dispatch<
    React.SetStateAction<
      | {
          item: string;
          quantity: number;
          price: number;
        }[]
      | undefined
    >
  >;
}

export default function AddToCart({ price, setItemsOnCart }: AddToCartProps) {
  const productName = useParams().product;
  const [quantity, setQuantity] = useState(0);

  function handleAddToCart() {
    if (productName && price && quantity > 0) {
      setItemsOnCart((prevItems) => {
        if (!prevItems) prevItems = [];
        if (!prevItems.find((item) => item.item === productName)) {
          return [
            ...prevItems,
            { item: productName, quantity: quantity, price: price },
          ];
        } else return [...prevItems];
      });
    }
  }

  return (
    <div className="flex flex-col gap-8 mt-6">
      <span className="font-bold text-lg tracking-[1.2px]">
        $ {price?.toLocaleString()}
      </span>
      <div className="w-full flex gap-4">
        <div className="bg-light-gray flex py-3 px-4 gap-5 justify-between items-center w-[120px]">
          <button
            className="opacity-25"
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="text-[13px] font-bold">{quantity}</span>
          <button
            className="opacity-25"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          className="bg-orange uppercase font-bold text-white py-3 px-8 text-[13px] w-[160px]"
          onClick={handleAddToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
