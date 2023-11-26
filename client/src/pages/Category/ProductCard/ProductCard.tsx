import { useEffect, useState } from 'react';
import { ImagesType } from '../../../types';
import { Link } from 'react-router-dom';
import SkeletonProductPreview from '../../../Components/Skeletons/SkeletonProductPreview';

interface PropsType {
  name: string;
  new: boolean;
  description: string;
  images: ImagesType;
  slug: string;
}

export default function ProductCard(props: PropsType) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = [
      props.images.mobile,
      props.images.tablet,
      props.images.desktop,
    ];

    const images = preloadImages.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        checkAllImagesLoaded();
      };
      return img;
    });

    const checkAllImagesLoaded = () => {
      const allLoaded = images.every((img) => img.complete);
      if (allLoaded) {
        setImageLoaded(true);
      }
    };

    return () => {
      images.forEach((img) => {
        img.onload = null;
      });
    };
  }, [props.images]);

  return (
    <article
      className={`flex flex-col items-center gap-8 lg:flex-row lg:w-full lg:gap-20 ${
        props.name !== 'YX1 Wireless Earphones' &&
        'lg:first-of-type:flex-row-reverse'
      }  ${props.new === true ? 'order-1' : 'order-2'}`}
    >
      {!imageLoaded ? (
        <SkeletonProductPreview />
      ) : (
        <>
          <img
            srcSet={`${props.images.mobile} 327w, ${props.images.tablet} 689w, ${props.images.desktop} 540w`}
            sizes="(max-width: 640px) 327px, (max-width: 1024px) 689px, 540px"
            alt="headphones"
            className="rounded-lg lg:max-w-[540px]"
            src={props.images.desktop}
          />

          <div className="flex flex-col gap-6 items-center lg:items-start">
            <span className="text-orange tracking-[10px] uppercase text-sm">
              {props.new && 'new product'}
            </span>
            <h3 className="uppercase font-bold tracking-[1px] text-[28px] text-center lg:text-left">
              {props.name}
            </h3>
            <p className=" text-[15px] opacity-50 sm:max-w-xl text-center lg:text-left">
              {props.description}
            </p>
            {
              <Link to={`/product-details/${props.slug}`}>
                <button className="bg-orange text-white w-40 h-12 uppercase font-bold text-sm tracking-[0.0625rem] hover:bg-orange-hover border-2 border-orange shadow-[inset_0_0_0_0_#ffffff] sm:hover:shadow-[inset_160px_0_0_0_#ffffff] hover:shadow-[inset_355px_0_0_0_#ffffff] transition-all duration-200 ease-in hover:text-orange">
                  see product
                </button>
              </Link>
            }
          </div>
        </>
      )}
    </article>
  );
}
