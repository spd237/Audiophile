import { Link } from 'react-router-dom';
import Reveal from '../../../Components/Animations/Reveal';

export default function Hero() {
  return (
    <section className="text-white flex items-center justify-center lg:justify-center lg:my-auto w-full bg-hero-mobile min-h-[587px] bg-cover bg-no-repeat sm:bg-hero-tablet sm:min-h-[729px] lg:bg-hero-desktop bg-[center_bottom_3rem] lg:bg-[center_bottom_4.5rem] lg:min-h-screen">
      <div className="flex flex-col items-center justify-start lg:items-start mb-20 mx-10 w-full lg:max-w-6xl">
        <Reveal>
          <h3 className="mb-4 tracking-[10px] opacity-50 uppercase text-sm lg:text-left">
            New Product
          </h3>
        </Reveal>
        <div className="max-w-[22rem] sm:max-w-md">
          <Reveal>
            <h2 className="font-bold text-4xl text-center leading-10 sm:text-[56px] sm:leading-[56px] lg:text-left">
              XX99 MARK II HEADPHONES
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-center opacity-75 font-medium text-[0.9375rem] leading-6 mx-5 mt-6 mb-7 lg:text-left lg:mx-0">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <Link to={'/product-details/xx99-mark-two-headphones'}>
            <button className="bg-orange text-white w-40 h-12 uppercase font-bold text-sm tracking-[0.0625rem] border-2 border-orange shadow-[inset_0_0_0_0_#191919] hover:shadow-[inset_328px_0_0_0_#191919] hover:text-orange transition-all duration-200 ease-in ">
              See product
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
