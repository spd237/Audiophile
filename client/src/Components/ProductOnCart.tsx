import { CartItem } from '../types';
interface ProductOnCartProps {
  name: string;
  quantity: number;
  price: number;
  setItemsOnCart: React.Dispatch<React.SetStateAction<[] | CartItem[]>>;
}

export default function ProductOnCart({
  name,
  quantity,
  price,
  setItemsOnCart,
}: ProductOnCartProps) {
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
        <button className="opacity-25" onClick={handleRemoveItem}>
          -
        </button>
        <span className="text-[13px] font-bold">{quantity}</span>
        <button className="opacity-25" onClick={handleAddItem}>
          +
        </button>
      </div>
    </div>
  );
}
