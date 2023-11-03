import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="text-white flex items-center justify-center lg:justify-normal lg:my-auto w-full bg-hero-mobile min-h-[587px] bg-cover bg-no-repeat sm:bg-hero-tablet sm:min-h-[729px] lg:bg-hero-desktop bg-[center_bottom_3rem] lg:bg-[center_bottom_4.5rem] lg:min-h-screen">
      <div className="flex flex-col items-center justify-start mx-auto w-full max-w-6xl lg:items-start mb-20">
        <h3 className="mb-4 tracking-[10px] opacity-50 uppercase text-sm lg:text-left">
          New Product
        </h3>
        <div className="max-w-md">
          <h2 className="font-bold text-4xl text-center leading-10 sm:text-[56px] sm:leading-[56px] lg:text-left">
            XX99 MARK II HEADPHONES
          </h2>
          <p className="text-center opacity-75 font-medium text-[0.9375rem] leading-6 mx-5 mt-6 mb-7 lg:text-left lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
        </div>
        <button className="bg-orange text-white w-40 h-12 uppercase font-bold text-sm tracking-[0.0625rem] hover:bg-orange-hover">
          <Link to={'/product-details/xx99-mark-two-headphones'}>
            See product
          </Link>
        </button>
      </div>
    </section>
  );
}
