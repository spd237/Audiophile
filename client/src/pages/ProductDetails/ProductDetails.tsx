import Header from '../../Components/Header';
import AddToCart from './AddToCart/AddToCart';
import Features from './Features/Features';
import Included from './Included/Included';
import CategoryCard from '../../Components/CategoryCard';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import OtherProducts from './OtherProducts/OtherProducts';
import { categories } from '../../utils';
import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../../api/api';

interface ProductDetailsProps {
  setItemsOnCart: React.Dispatch<
    React.SetStateAction<
      | {
          item: string;
          quantity: number;
          price: number;
        }[]
      | undefined
    >
  >;
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonCartRef: React.RefObject<HTMLButtonElement>;
  buttonNavRef: React.RefObject<HTMLButtonElement>;
}

export default function ProductDetails({
  setItemsOnCart,
  navOpen,
  setNavOpen,
  setCartOpen,
  buttonCartRef,
  buttonNavRef,
}: ProductDetailsProps) {
  const goBack = useNavigate();
  const slug = useParams().product;
  const { data } = useQuery(['productDetails', slug], () => getProduct(slug));

  const categoryCards = categories.map((category, index) => {
    return (
      <CategoryCard
        key={index}
        categoryName={category.category}
        thumbnail={category.thumbnail}
        setNavOpen={setNavOpen}
      />
    );
  });

  const otherProducts = data?.data.others.map((product, index) => {
    return (
      <OtherProducts
        key={index}
        slug={product.slug}
        name={product.name}
        image={product.image}
      />
    );
  });

  return (
    <>
      <div className="bg-almost-black">
        <Header
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          setCartOpen={setCartOpen}
          buttonCartRef={buttonCartRef}
          buttonNavRef={buttonNavRef}
        />
      </div>
      <div className="flex flex-col items-center mx-6 sm:mx-10 lg:mx-auto lg:max-w-6xl">
        <div>
          <button
            className="bg-transparent text-[15px] font-medium opacity-50 leading-6 mt-4 mb-6"
            onClick={() => goBack(-1)}
          >
            Go Back
          </button>
          <article className="flex flex-col items-center gap-8 sm:flex-row sm:gap-[70px] lg:w-full">
            <img
              srcSet={`${data?.data.image.mobile} 327w, ${data?.data.image.tablet} 281w, ${data?.data.image.desktop} 540w`}
              sizes="(max-width: 640px) 327px, (max-width: 1024px) 281px, 540px"
              alt="mark II headphones"
              className="rounded-lg sm:max-w-xs lg:max-w-[540px]"
              src={data?.data.image.desktop}
            />

            <div className="flex flex-col gap-6 sm:gap-4">
              {data?.data.new && (
                <span className="text-orange tracking-[10px] uppercase text-sm ">
                  new product
                </span>
              )}
              <h3 className="uppercase font-bold tracking-[1px] text-[28px] sm:mb-4">
                {data?.data.name}
              </h3>
              <p className=" text-[15px] opacity-50 sm:max-w-xl">
                {data?.data.description}
              </p>
              <AddToCart
                price={data?.data.price}
                setItemsOnCart={setItemsOnCart}
              />
            </div>
          </article>
        </div>
        <div className="lg:flex gap-[125px] lg:my-40 lg:self-start">
          <Features features={data?.data.features} />
          <Included inTheBox={data?.data.includes} />
        </div>
        <div className="w-full flex flex-col gap-5 sm:grid grid-rows-2 grid-cols-[41.5%_58.5%] sm:gap-4 lg:gap-x-0">
          <img
            srcSet={`${data?.data.gallery.first.mobile} 327w, ${data?.data.gallery.first.tablet} 277w, ${data?.data.gallery.first.desktop} 445w`}
            sizes="(max-width: 640px) 327px, (max-width: 1024px) 277px, 445px"
            alt="gallery img"
            className="rounded-lg self-start"
            src={data?.data.gallery.first.desktop}
          />
          <img
            srcSet={`${data?.data.gallery.second.mobile} 327w, ${data?.data.gallery.second.tablet} 277w, ${data?.data.gallery.second.desktop} 445w`}
            sizes="(max-width: 640px) 327px, (max-width: 1024px) 277px, 445px"
            alt="gallery img"
            className="rounded-lg row-start-2 self-end"
            src={data?.data.gallery.second.desktop}
          />
          <img
            srcSet={`${data?.data.gallery.third.mobile} 327w, ${data?.data.gallery.third.tablet} 395w, ${data?.data.gallery.third.desktop} 635w`}
            sizes="(max-width: 640px) 327px, (max-width: 1024px) 395px, 635px"
            alt="gallery img"
            className="row-start-1 row-span-2 rounded-lg"
            src={data?.data.gallery.third.desktop}
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
