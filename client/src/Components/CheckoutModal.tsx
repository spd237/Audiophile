import checkmark from "../assets/icon-order-confirmation.svg";
import mark2checkout from "../assets/image-xx99-mark-two-headphones-cart.jpg";
export default function CheckoutModal() {
  return (
    <div className="bg-white fixed z-10 m-auto top-0 bottom-0 left-0 right-0 max-w-xs max-h-[600px] p-8 rounded-lg sm:max-w-[540px] sm:max-h-[580px]">
      <img src={checkmark} alt="checkmark" />
      <h2 className="uppercase text-[24px] font-bold mt-6 mb-4 leading-7 tracking-[0.85px] sm:text-[32px] sm:tracking-[1.143px] sm:leading-9 sm:max-w-xs">
        thank you for your order
      </h2>
      <span className="text-[15px] opacity-50">
        You will recieve an email confirmation shortly.
      </span>
      <div className="mt-6 sm:flex">
        <div className="bg-light-gray flex flex-col p-6 rounded-t-lg sm:min-w-[246px] sm:rounded-t-none sm:rounded-l-lg">
          <div className="flex items-center justify-center relative after:absolute after:bg-black after:opacity-[0.08] after:w-full after:h-[1px] after:-bottom-3">
            <img
              src={mark2checkout}
              alt="mark 2 headphones"
              className="w-8 h-9"
            />
            <div className="flex flex-col ml-4 mr-5">
              <span className="text-[15px] font-bold uppercase">
                xx99 mk ii
              </span>
              <span className="text-sm font-bold opacity-50">$2,999</span>
            </div>
            <span className="text-[15px] font-bold opacity-50 ml-auto">x1</span>
          </div>
          <span className="opacity-50 font-bold text-xs tracking-[-0.2px] self-center mt-6 bef">
            and 2 other item(s)
          </span>
        </div>
        <div className="bg-black flex flex-col gap-2 p-6 rounded-b-lg sm:w-full sm:rounded-b-none sm:rounded-r-lg">
          <span className="font-bold text-[15px] text-white opacity-50 uppercase">grand total</span>
          <span className="text-white font-bold text-[18px]">$5,446</span>
        </div>
      </div>
      <button className="bg-orange text-white font-bold text-[13px] w-full uppercase mt-6 py-4 tracking-[1px] sm:mt-[46px]">back to home</button>
    </div>
  );
}
