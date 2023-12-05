import AddToCart from './AddToCart/AddToCart';
import Features from './Features/Features';
import Included from './Included/Included';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import OtherProducts from './OtherProducts/OtherProducts';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../../api/api';
import { CartItem } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import SkeletonProductDetails from '../../Components/Skeletons/SkeletonProductDetails';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { renderCategoryCards } from '../../utils/renderCategoryCards';
import { useAuthToken } from '../../hooks/useAuthToken';

interface ProductDetailsProps {
  setItemsOnCart: React.Dispatch<React.SetStateAction<CartItem[] | []>>;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductDetails({
  setItemsOnCart,
  setNavOpen,
}: ProductDetailsProps) {
  const token = useAuthToken();
  const goBack = useNavigate();
  const slug = useParams().product;
  const [imageLoaded, setImagesLoaded] = useState(false);
  const [addToCartStatus, setAddToCartStatus] = useState<string>('');

  const { data, isLoading } = useQuery(['productDetails', slug], () =>
    getProduct(slug)
  );

  const categoryCards = renderCategoryCards(setNavOpen);

  const otherProducts = data?.others.map((product) => {
    return (
      <OtherProducts
        key={uuidv4()}
        slug={product.slug}
        name={product.name}
        image={product.image}
      />
    );
  });

  useEffect(() => {
    const preloadImages = data?.image && [
      data.image.mobile,
      data.image.tablet,
      data.image.desktop,
    ];

    const images = preloadImages?.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        checkAllImagesLoaded();
      };
      return img;
    });

    function checkAllImagesLoaded() {
      const allLoaded = images?.every((img) => img.complete);
      if (allLoaded) {
        setImagesLoaded(true);
      }
    }

    return () => {
      images?.forEach((img) => {
        img.onload = null;
      });
    };
  }, [data?.image]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddToCartStatus('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [addToCartStatus]);

  return (
    <>
      <div className="flex flex-col items-center mx-6 sm:mx-10 lg:max-w-6xl xl:mx-auto relative top-4">
        <AnimatePresence>
          {addToCartStatus && (
            <motion.div
              key="status-msg"
              layout
              initial={{ y: -10, scale: 0.95 }}
              animate={{
                y: 0,
                scale: 1,
                transition: {
                  ease: 'easeIn',
                  duration: 0.2,
                },
              }}
              exit={{
                y: -5,
                opacity: 0,
                transition: {
                  ease: 'easeOut',
                  duration: 0.2,
                },
              }}
              className="bg-orange text-white rounded py-1 px-2 text-sm font-bold absolute left-0 right-0 mx-auto max-w-fit"
            >
              {addToCartStatus}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="max-w-full">
          <button
            className="bg-transparent text-[15px] font-medium opacity-50 leading-6 mt-4 mb-6 hover:text-orange hover:opacity-100"
            onClick={() => goBack(-1)}
          >
            Go Back
          </button>

          {isLoading || !imageLoaded ? (
            <>
              <span className="absolute left-0 right-0 mx-auto max-w-fit text-sm">
                Takes a second to load because free tier API hosting...
              </span>
              <SkeletonProductDetails />
            </>
          ) : (
            <article className="flex flex-col items-center gap-8 sm:flex-row sm:gap-[70px] sm:items-center lg:w-full">
              <img
                srcSet={`${data?.image.mobile} 327w, ${data?.image.tablet} 281w, ${data?.image.desktop} 540w`}
                sizes="(max-width: 640px) 327px, (max-width: 1024px) 281px, 540px"
                alt="mark II headphones"
                className="rounded-lg sm:max-w-xs lg:max-w-[540px]"
                src={data?.image.desktop}
              />

              <div className="flex flex-col gap-6 sm:gap-4">
                {data?.new && (
                  <span className="text-orange tracking-[10px] uppercase text-sm ">
                    new product
                  </span>
                )}
                <h3 className="uppercase font-bold tracking-[1px] text-[28px] sm:mb-4">
                  {data?.name}
                </h3>
                <p className=" text-[15px] opacity-50 sm:max-w-xl">
                  {data?.description}
                </p>
                <AddToCart
                  price={data?.price}
                  setItemsOnCart={setItemsOnCart}
                  token={token}
                  setAddToCartStatus={setAddToCartStatus}
                />
              </div>
            </article>
          )}
        </div>
        <div className="lg:flex gap-[125px] lg:my-40 lg:self-start">
          <Features features={data?.features} />
          <Included inTheBox={data?.includes} />
        </div>
        <div className="w-full flex flex-col gap-5 sm:grid grid-rows-2 grid-cols-[41.5%_58.5%] sm:gap-4 lg:gap-x-0">
          <img
            srcSet={`${data?.gallery.first.mobile} 327w, ${data?.gallery.first.tablet} 277w, ${data?.gallery.first.desktop} 445w`}
            sizes="(max-width: 640px) 327px, (max-width: 1024px) 277px, 445px"
            alt="gallery img"
            className="rounded-lg self-start"
            src={data?.gallery.first.desktop}
          />
          <img
            srcSet={`${data?.gallery.second.mobile} 327w, ${data?.gallery.second.tablet} 277w, ${data?.gallery.second.desktop} 445w`}
            sizes="(max-width: 640px) 327px, (max-width: 1024px) 277px, 445px"
            alt="gallery img"
            className="rounded-lg row-start-2 self-end"
            src={data?.gallery.second.desktop}
          />
          <img
            srcSet={`${data?.gallery.third.mobile} 327w, ${data?.gallery.third.tablet} 395w, ${data?.gallery.third.desktop} 635w`}
            sizes="(max-width: 640px) 327px, (max-width: 1024px) 395px, 635px"
            alt="gallery img"
            className="row-start-1 row-span-2 rounded-lg"
            src={data?.gallery.third.desktop}
          />
        </div>
        <div className="my-28">
          <h3 className="uppercase font-bold leading-9 text-2xl mb-10 text-center">
            you may also like
          </h3>
          <div className="w-full sm:flex gap-3 lg:gap-8 justify-between">
            {otherProducts}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[68px] items-center mt-24 sm:flex-row sm:justify-between sm:gap-[10px] lg:gap-7">
          {categoryCards}
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
}
