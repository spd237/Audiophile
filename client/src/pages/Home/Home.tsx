import Hero from './Hero/Hero';
import CategoryCard from '../../Components/CategoryCard';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import ProductPreviewZX7 from './ProductPreviews/ProductPreviewZX7';
import ProductPreviewYX1 from './ProductPreviews/ProductPreviewYX1';
import ProductPreviewZX9 from './ProductPreviews/ProductPreviewZX9';
import { categories } from '../../utils';

export default function Home({
  setNavOpen,
}: {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
      <Hero />
      <div className="flex flex-col items-center">
        <div className="mx-6 flex flex-col items-center sm:mx-10 lg:max-w-6xl">
          <div className="flex flex-col gap-[68px] items-center mt-24 w-full sm:flex-row sm:gap-[10px] lg:gap-7">
            {categoryCards}
          </div>
          <div className="w-full flex flex-col items-center gap-6 mt-[120px] lg:gap-8">
            <ProductPreviewZX9 />
            <ProductPreviewZX7 />
            <ProductPreviewYX1 />
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
}
