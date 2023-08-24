import mark2cart from "../assets/image-xx99-mark-two-headphones-cart.jpg";

export default function ProductOnCart() {
  return (
    <div className="flex items-center">
      <img src={mark2cart} alt="mark 2 headphones" className="max-w-[64px] rounded-lg"/>
      <div className="flex flex-col ml-4 mr-5">
        <span className="text-[15px] font-bold uppercase">xx99 mk ii</span>
        <span className="text-sm font-bold opacity-50">$2,999</span>
      </div>
      <div className="bg-light-gray flex items-center justify-between w-[89px] h-[30px] px-3">
        <button className="opacity-25">-</button>
        <span className="text-[13px] font-bold">1</span>
        <button className="opacity-25">+</button>
      </div>
    </div>
  );
}
