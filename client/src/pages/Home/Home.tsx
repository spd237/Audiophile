import Header from '../../Components/Header';
import Hero from './Hero/Hero';
import CategoryCard from '../../Components/CategoryCard';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import ProductPreviewZX7 from './ProductPreviews/ProductPreviewZX7';
import ProductPreviewYX1 from './ProductPreviews/ProductPreviewYX1';
import ProductPreviewZX9 from './ProductPreviews/ProductPreviewZX9';
import { categories } from '../../utils';
import { CommonPropsType } from '../../types';

export default function Home({
  navOpen,
  setNavOpen,
  setCartOpen,
  buttonCartRef,
  buttonNavRef,
}: CommonPropsType) {
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

  return (
    <>
      <div className="w-full bg-hero-mobile min-h-[587px] bg-cover bg-no-repeat sm:bg-hero-tablet sm:min-h-[729px] lg:bg-hero-desktop lg:min-h-screen bg-center flex flex-col">
        <Header
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          setCartOpen={setCartOpen}
          buttonCartRef={buttonCartRef}
          buttonNavRef={buttonNavRef}
        />
        <Hero />
      </div>
      <div className="flex flex-col items-center">
        <div className="mx-6 flex flex-col items-center sm:mx-10 lg:max-w-5xl">
          <div className="flex flex-col gap-[68px] items-center mt-24 w-full sm:flex-row sm:gap-[10px] lg:gap-7 ">
            {categoryCards}
          </div>
          <div className="flex flex-col items-center gap-6 mt-[120px] lg:gap-8">
            <ProductPreviewZX9 />
            <ProductPreviewZX7 />
            <ProductPreviewYX1 />
          </div>
          <About />
        </div>
      </div>
      <Footer />
    </>
  );
}
