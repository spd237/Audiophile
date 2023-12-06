import { ImagesType } from '../../../types';
import { Link } from 'react-router-dom';
import SkeletonProductPreview from '../../../Components/Skeletons/SkeletonProductPreview';

interface PropsType {
  name: string;
  isNew: boolean;
  description: string;
  images: ImagesType;
  slug: string;
  isLoading: boolean;
}

export default function ProductCard({
  name,
  isNew,
  description,
  images,
  slug,
  isLoading,
}: PropsType) {
  return (
    <article
      className={`flex flex-col items-center gap-8 lg:flex-row lg:w-full lg:gap-20 ${
        name !== 'YX1 Wireless Earphones' && 'lg:first-of-type:flex-row-reverse'
      }  ${isNew === true ? 'order-1' : 'order-2'}`}
    >
      {isLoading ? (
        <SkeletonProductPreview />
      ) : (
        <>
          <img
            srcSet={`${images.mobile} 327w, ${images.tablet} 689w, ${images.desktop} 540w`}
            sizes="(max-width: 640px) 327px, (max-width: 1024px) 689px, 540px"
            alt="headphones"
            className="rounded-lg lg:max-w-[540px]"
            src={images.desktop}
          />

          <div className="flex flex-col gap-6 items-center lg:items-start">
            <span className="text-orange tracking-[10px] uppercase text-sm">
              {isNew && 'new product'}
            </span>
            <h3 className="uppercase font-bold tracking-[1px] text-[28px] text-center lg:text-left">
              {name}
            </h3>
            <p className=" text-[15px] opacity-50 sm:max-w-xl text-center lg:text-left">
              {description}
            </p>
            {
              <Link to={`/product-details/${slug}`}>
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
