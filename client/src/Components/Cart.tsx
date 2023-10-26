import ProductOnCart from './ProductOnCart';

interface CartProps {
  cartRef: React.RefObject<HTMLDivElement>;
  itemsOnCart:
    | {
        item: string;
        quantity: number;
        price: number;
      }[]
    | undefined;
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

export default function Cart({
  cartRef,
  itemsOnCart,
  setItemsOnCart,
}: CartProps) {
  const totalQuantity = itemsOnCart?.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.quantity;
  }, 0);
  const totalPrice = itemsOnCart?.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.price * currentProduct.quantity;
  }, 0);

  const productsOnCart = itemsOnCart?.map((item, index) => {
    return (
      <ProductOnCart
        key={index}
        name={item.item}
        quantity={item.quantity}
        price={item.price}
        setItemsOnCart={setItemsOnCart}
      />
    );
  });

  return (
    <div
      className="absolute top-24 bg-white rounded-lg mx-auto left-0 right-0 max-w-xs z-10 px-7 py-8 sm:max-w-sm sm:left-[21.5rem] lg:left-[48rem]"
      ref={cartRef}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold tracking-[1.2px] uppercase">
          cart<span>({totalQuantity || 0})</span>
        </span>
        <button
          className="text-[15px] font-medium opacity-50 underline"
          onClick={() => setItemsOnCart([])}
        >
          Remove All
        </button>
      </div>
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
        <button className="bg-orange text-white text-[13px] font-bold tracking-[1px] uppercase w-full py-4 mt-6">
          checkout
        </button>
      </div>
    </div>
  );
}
