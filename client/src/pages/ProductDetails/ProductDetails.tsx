import Header from '../../Components/Header';
import AddToCart from './AddToCart/AddToCart';
import Features from './Features/Features';
import Included from './Included/Included';
import CategoryCard from '../../Components/CategoryCard';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import OtherProducts from './OtherProducts/OtherProducts';
import { categories } from '../../utils';
import { CommonPropsType } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/api';
import Menu from '../../Components/Menu';
import Cart from '../../Components/Cart';
export default function ProductDetails({
  navOpen,
  setNavOpen,
  cartOpen,
  setCartOpen,
  cartRef,
  navRef,
  buttonCartRef,
  buttonNavRef,
}: CommonPropsType) {
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
          setNavOpen={setNavOpen}
          setCartOpen={setCartOpen}
          buttonCartRef={buttonCartRef}
          buttonNavRef={buttonNavRef}
        />
      </div>
      <div className="flex flex-col items-center mx-6 sm:mx-10 lg:mx-auto lg:max-w-5xl">
        <div className=" lg:max-w-5xl">
          <button className="bg-transparent text-[15px] font-medium opacity-50 leading-6 mt-4 mb-6">
            Go Back
          </button>
          <article className="flex flex-col items-center gap-8 sm:flex-row sm:gap-[70px] lg:flex-row lg:w-full">
            <img
              src={data?.data.image.desktop}
              alt="mark II headphones"
              className="rounded-lg sm:max-w-xs lg:max-w-[540px]"
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
              <AddToCart price={data?.data.price} />
            </div>
          </article>
        </div>
        <div className="lg:flex lg:max-w-5xl gap-[125px] lg:my-40 lg:self-start">
          <Features features={data?.data.features} />
          <Included inTheBox={data?.data.includes} />
        </div>
        <div className="lg:max-w-5xl flex flex-col gap-6 sm:grid grid-rows-2 grid-cols-[41.5%_58.5%] sm:gap-4 overflow-hidden">
          <img
            src={data?.data.gallery.first.desktop}
            alt="gallery img"
            className="rounded-lg self-start"
          />
          <img
            src={data?.data.gallery.second.desktop}
            alt="gallery img"
            className="rounded-lg row-start-2"
          />
          <img
            src={data?.data.gallery.third.desktop}
            alt="gallery img"
            className="rounded-lg row-start-1 row-span-2"
          />
        </div>
        <div className="lg:max-w-5xl my-28">
          <h3 className="uppercase font-bold leading-9 text-2xl mb-10 text-center">
            you may also like
          </h3>
          <div className="w-full sm:flex gap-3 lg:gap-8 justify-between">
            {otherProducts}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[68px] items-center mt-24 lg:max-w-5xl sm:flex-row sm:justify-between sm:gap-[10px] lg:gap-7">
          {categoryCards}
        </div>
      </div>
      <About />
      <Footer />
      {navOpen && (
        <>
          {' '}
          <Menu setNavOpen={setNavOpen} navRef={navRef} />
          <div className="bg-black opacity-40 h-screen w-screen fixed top-0"></div>
        </>
      )}
      {cartOpen && (
        <>
          <Cart cartRef={cartRef} />{' '}
          <div className="bg-black opacity-40 h-screen w-screen fixed top-0"></div>
        </>
      )}
    </>
  );
}
