import Footer from '../../Components/Footer';
import mark2cart from '../../assets/image-xx99-mark-two-headphones-cart.jpg';

export default function Checkout() {
  return (
    <>
      <div className="bg-light-gray flex justify-center">
        <div className="w-full mx-6 sm:mx-10 lg:max-w-6xl lg:grid grid-cols-[65%_35%] grid-rows-[5%_95%] pb-[97px] gap-x-[30px]">
          <button className="bg-transparent text-[15px] font-medium opacity-50 leading-6 mt-4 mb-6 lg:max-w-[57px] sm:mt-12 lg:mt-20">
            Go Back
          </button>
          <form className="bg-white rounded-lg px-6 pt-6 pb-8 flex flex-col gap-8 mb-8 row-start-2 lg:mb-0">
            <div>
              <h2 className="uppercase text-[28px] tracking-[1px] font-bold mb-8">
                checkout
              </h2>
              <div className="flex flex-col gap-4 sm:grid grid-cols-2 grid-rows-[20%_40%_40%]">
                <h3 className="text-orange text-[13px] uppercase tracking-[0.9px] font-bold leading-6 self-end">
                  billing details
                </h3>
                <div className="flex flex-col gap-[9px] row-start-2 col-start-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold tracking-[-0.2px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40"
                  />
                </div>
                <div className="flex flex-col gap-[9px] row-start-2 col-start-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold tracking-[-0.2px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40"
                  />
                </div>
                <div className="flex flex-col gap-[9px] row-start-3">
                  <label
                    htmlFor="tel"
                    className="text-xs font-bold tracking-[-0.2px]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:grid grid-cols-2 grid-rows-[10%_30%_30%_30%]">
              <h3 className="text-orange text-[13px] uppercase tracking-[0.9px] font-bold leading-6">
                shipping info
              </h3>
              <div className="flex flex-col gap-[9px] row-start-2 col-span-2">
                <label
                  htmlFor="address"
                  className="text-xs font-bold tracking-[-0.2px]"
                >
                  Your address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40"
                />
              </div>
              <div className="flex flex-col gap-[9px] row-start-3">
                <label
                  htmlFor="zip"
                  className="text-xs font-bold tracking-[-0.2px]"
                >
                  Zip Code
                </label>
                <input
                  type="number"
                  name="zip"
                  id="zip"
                  className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40"
                />
              </div>
              <div className="flex flex-col gap-[9px] row-start-3 col-start-2">
                <label
                  htmlFor="city"
                  className="text-xs font-bold tracking-[-0.2px]"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40"
                />
              </div>
              <div className="flex flex-col gap-[9px] row-start-4">
                <label
                  htmlFor="country"
                  className="text-xs font-bold tracking-[-0.2px]"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:grid grid-cols-2 grid-rows-[10%_30%_30%_30%]">
              <h3 className="text-orange text-[13px] uppercase tracking-[0.9px] font-bold leading-6">
                payment details
              </h3>
              <span className="text-xs font-bold tracking-[-0.2px] row-start-2">
                Payment Method
              </span>
              <div className="flex flex-col gap-4 row-start-2 col-start-2">
                <label className="text-sm font-bold tracking-[-0.2px] flex gap-4 border border-input-border-color rounded-lg px-4 py-[18px]">
                  <input
                    type="checkbox"
                    name="e-money"
                    id="e-money"
                    className="rounded-full"
                  />
                  e-Money
                </label>
                <label className="text-sm font-bold tracking-[-0.2px] flex gap-4 border border-input-border-color rounded-lg px-4 py-[18px]">
                  <input type="checkbox" name="cash" id="cash" />
                  Cash on Delivery
                </label>
              </div>
              <div className="flex flex-col gap-[9px] mt-4 row-start-4 sm:mt-0">
                <label
                  htmlFor="e-money-nr"
                  className="text-xs font-bold tracking-[-0.2px]"
                >
                  e-Money Number
                </label>
                <input
                  type="number"
                  name="e-money-nr"
                  id="e-money-nr"
                  className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40 w-full"
                />
              </div>
              <div className="flex flex-col gap-[9px] row-start-4">
                <label
                  htmlFor="e-money-pin"
                  className="text-xs font-bold tracking-[-0.2px]"
                >
                  e-Money PIN
                </label>
                <input
                  type="number"
                  name="e-money-pin"
                  id="e-money-pin"
                  className="border border-input-border-color rounded-lg px-6 py-[18px] text-sm font-bold text-black/40 w-full"
                />
              </div>
            </div>
          </form>
          <div className="bg-white rounded-lg px-6 py-8 flex flex-col gap-6 row-start-2 col-start-2 lg:max-h-[612px]">
            <h2 className=" text-lg uppercase font-bold tracking-[1.2px]">
              summary
            </h2>
            <div className="flex items-center">
              <img
                src={mark2cart}
                alt="mark 2 headphones"
                className="max-w-[64px] rounded-lg"
              />
              <div className="flex flex-col ml-4 mr-5">
                <span className="text-[15px] font-bold uppercase">
                  xx99 mk ii
                </span>
                <span className="text-sm font-bold opacity-50">$2,999</span>
              </div>
              <span className="text-[15px] font-bold opacity-50 ml-auto">
                x1
              </span>
            </div>
            <div className="flex items-center">
              <img
                src={mark2cart}
                alt="mark 2 headphones"
                className="max-w-[64px] rounded-lg"
              />
              <div className="flex flex-col ml-4 mr-5">
                <span className="text-[15px] font-bold uppercase">
                  xx99 mk ii
                </span>
                <span className="text-sm font-bold opacity-50">$2,999</span>
              </div>
              <span className="text-[15px] font-bold opacity-50 ml-auto">
                x1
              </span>
            </div>
            <div className="flex items-center">
              <img
                src={mark2cart}
                alt="mark 2 headphones"
                className="max-w-[64px] rounded-lg"
              />
              <div className="flex flex-col ml-4 mr-5">
                <span className="text-[15px] font-bold uppercase">
                  xx99 mk ii
                </span>
                <span className="text-sm font-bold opacity-50">$2,999</span>
              </div>
              <span className="text-[15px] font-bold opacity-50 ml-auto">
                x1
              </span>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-[15px] font-medium uppercase opacity-50">
                  total
                </span>
                <span className="text-lg font-bold uppercase">$5,436</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[15px] font-medium uppercase opacity-50">
                  shipping
                </span>
                <span className="text-lg font-bold uppercase">$50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[15px] font-medium uppercase opacity-50">
                  vat(included)
                </span>
                <span className="text-lg font-bold uppercase">$1,047</span>
              </div>
              <div className="flex justify-between mt-6">
                <span className="text-[15px] font-medium uppercase opacity-50">
                  grand total
                </span>
                <span className="text-lg font-bold uppercase text-orange">
                  $5,486
                </span>
              </div>
              <button className="bg-orange text-white text-[13px] uppercase font-bold tracking-[1px] w-full py-4 mt-8">
                continue & pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
