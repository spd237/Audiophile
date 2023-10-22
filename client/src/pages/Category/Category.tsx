import Header from '../../Components/Header';
import ProductCard from './ProductCard/ProductCard';
import CategoryCard from '../../Components/CategoryCard';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import Menu from '../../Components/Menu';
import { categories } from '../../utils';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getEarphones, getHeadphones, getSpeakers } from '../../api/api';
import Cart from '../../Components/Cart';
import { CommonPropsType } from '../../types';

export default function Category({
  navOpen,
  setNavOpen,
  cartOpen,
  setCartOpen,
  cartRef,
  navRef,
  buttonCartRef,
  buttonNavRef,
}: CommonPropsType) {
  const currentPage = useParams().category;
  const { data } = useQuery({
    queryKey: ['products', currentPage],
    queryFn:
      currentPage === 'headphones'
        ? getHeadphones
        : currentPage === 'speakers'
        ? getSpeakers
        : getEarphones,
  });

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

  const productCards = data?.data.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        new={product.new}
        description={product.description}
        images={product.categoryImage}
        slug={product.slug}
      />
    );
  });

  return (
    <>
      <div className="bg-black">
        <Header
          setNavOpen={setNavOpen}
          setCartOpen={setCartOpen}
          buttonCartRef={buttonCartRef}
          buttonNavRef={buttonNavRef}
        />
        <h2 className="uppercase text-white font-bold text-[28px] tracking-[2px] text-center py-8 px-[84px] mb-16 sm:py-24 sm:px-60">
          {currentPage}
        </h2>
      </div>
      <div className="max-w-xs sm:max-w-2xl lg:max-w-5xl flex flex-col items-center gap-[120px] mx-auto mb-60 mt-40 ">
        {productCards}
      </div>
      <div className="flex flex-col gap-[68px] items-center mx-auto mt-24 max-w-xs sm:max-w-2xl lg:max-w-5xl sm:flex-row sm:justify-between sm:gap-[10px] lg:gap-7">
        {categoryCards}
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
