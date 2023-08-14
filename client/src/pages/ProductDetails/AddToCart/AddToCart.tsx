export default function AddToCart() {
  return (
    <div className="flex flex-col gap-8 mt-6">
      <span className="font-bold text-lg tracking-[1.2px]">$ 2,999</span>
      <div className="w-full flex gap-4">
        <div className="bg-light-gray flex py-3 px-4 gap-5 justify-between items-center w-[120px]">
          <button className="opacity-25">-</button>
          <span className="text-[13px] font-bold">1</span>
          <button className="opacity-25">+</button>
        </div>
        <button className="bg-orange uppercase font-bold text-white py-3 px-8 text-[13px] w-[160px] ">add to cart</button>
      </div>
    </div>
  );
}
