import Header from '../../Components/Header';
import AddToCart from './AddToCart/AddToCart';
import Features from './Features/Features';
import InTheBox from './InTheBox/InTheBox';
import CategoryCard from '../../Components/CategoryCard';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
// import mark2headphones from "../../assets/image-xx99-mark-two-headphones-category.jpg";
// import mark2headphonesTablet from "../../assets/image-mark-two-headphones-product-details-tablet.jpg";
import mark2headphonesDesktop from '../../assets/image-xx99-mark-two-headphones-product-details-desktop.jpg';
// import galleryPic1Mobile from "../../assets/image-gallery-mark2-1.jpg";
// import galleryPic2Mobile from "../../assets/image-gallery-mark2-2.jpg";
// import galleryPic3Mobile from "../../assets/image-gallery-mark2-3.jpg";
import galleryPic1Tablet from '../../assets/image-gallery-mark2-tablet-1.jpg';
import galleryPic2Tablet from '../../assets/image-gallery-mark2-tablet-2.jpg';
import galleryPic3Tablet from '../../assets/image-gallery-mark2-tablet-3.jpg';
import galleryPic1Desktop from '../../assets/image-gallery-mark2-desktop-1.jpg';
import galleryPic2Desktop from '../../assets/image-gallery-mark2-desktop-2.jpg';
import galleryPic3Desktop from '../../assets/image-gallery-mark2-desktop-3.jpg';

import OtherProducts from './OtherProducts/OtherProducts';
import { categories } from '../../utils';

export default function ProductDetails() {
  const categoryCards = categories.map((category, index) => {
    return (
      <CategoryCard
        key={index}
        categoryName={category.category}
        thumbnail={category.thumbnail}
      />
    );
  });

  return (
    <>
      <div className="bg-almost-black">
        <Header />
      </div>
      <div className="flex flex-col items-center mx-6 sm:mx-10 lg:mx-auto lg:max-w-5xl">
        <div className=" lg:max-w-5xl">
          <button className="bg-transparent text-[15px] font-medium opacity-50 leading-6 mt-4 mb-6">
            Go Back
          </button>
          <article className="flex flex-col items-center gap-8 sm:flex-row sm:gap-[70px] lg:flex-row lg:w-full">
            <img
              src={mark2headphonesDesktop}
              alt="mark II headphones"
              className="rounded-lg sm:max-w-xs lg:max-w-[540px]"
            />
            <div className="flex flex-col gap-6 sm:gap-4">
              <span className="text-orange tracking-[10px] uppercase text-sm ">
                new product
              </span>
              <h3 className="uppercase font-bold tracking-[1px] text-[28px] sm:mb-4">
                xx99 mark ii headphones
              </h3>
              <p className=" text-[15px] opacity-50 sm:max-w-xl">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <AddToCart />
            </div>
          </article>
        </div>
        <div className="lg:flex lg:max-w-5xl gap-[125px] lg:my-40 lg:self-start">
          <Features />
          <InTheBox />
        </div>
        <div className="lg:max-w-5xl flex flex-col gap-6 sm:grid grid-rows-2 grid-cols-[41.5%_58.5%] sm:gap-4 overflow-hidden">
          <img
            src={galleryPic1Desktop}
            alt="mark2 headphones"
            className="rounded-lg self-start"
          />
          <img
            src={galleryPic2Desktop}
            alt="mark2 headphones"
            className="rounded-lg row-start-2"
          />
          <img
            src={galleryPic3Desktop}
            alt="mark2 headphones"
            className="rounded-lg row-start-1 row-span-2"
          />
        </div>
        <div className="lg:max-w-5xl my-28">
          <h3 className="uppercase font-bold leading-9 text-2xl mb-10 text-center">
            you may also like
          </h3>
          <div className="w-full sm:flex gap-3 lg:gap-8 justify-between">
            <OtherProducts />
            <OtherProducts />
            <OtherProducts />
          </div>
        </div>
        <div className="w-full flex flex-col gap-[68px] items-center mt-24 lg:max-w-5xl sm:flex-row sm:justify-between sm:gap-[10px] lg:gap-7">
          {categoryCards}
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
}
