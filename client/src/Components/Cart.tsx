import ProductOnCart from './ProductOnCart';
export default function Cart({
  cartRef,
}: {
  cartRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      className="absolute top-24 bg-white rounded-lg mx-auto left-0 right-0 max-w-xs z-10 px-7 py-8 sm:max-w-sm sm:left-[18rem] lg:left-[39.75rem]"
      ref={cartRef}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold tracking-[1.2px] uppercase">
          cart<span>(3)</span>
        </span>
        <button className="text-[15px] font-medium opacity-50 underline">
          Remove All
        </button>
      </div>
      <div className="flex flex-col gap-6 my-8">
        <ProductOnCart />
        <ProductOnCart />
        <ProductOnCart />
      </div>
      <div className="flex justify-between">
        <span className="text-[15px] font-medium opacity-50 uppercase">
          total
        </span>
        <span className="text-lg font-bold">$5,396</span>
      </div>
      <button className="bg-orange text-white text-[13px] font-bold tracking-[1px] uppercase w-full py-4 mt-6">
        checkout
      </button>
    </div>
  );
}
