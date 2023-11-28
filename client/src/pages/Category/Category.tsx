import ProductCard from './ProductCard/ProductCard';
import CategoryCard from '../../Components/CategoryCard';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import { categories } from '../../utils';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCategory } from '../../api/api';
import SkeletonProductPreview from '../../Components/Skeletons/SkeletonProductPreview';

export default function Category({
  setNavOpen,
}: {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const currentPage = useParams().category;
  const { data, isLoading } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => {
      if (
        currentPage === 'headphones' ||
        currentPage === 'earphones' ||
        currentPage === 'speakers'
      )
        return getCategory(currentPage);
    },
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

  const productCards = data?.map((product) => {
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
      <div className="bg-dark-gray">
        <h2 className="uppercase text-white font-bold text-[28px] tracking-[2px] text-center py-8 px-[84px] mb-16 sm:py-24 sm:px-60">
          {currentPage}
        </h2>
      </div>
      <div className="mx-6 sm:mx-10 lg:max-w-6xl flex flex-col items-center gap-[120px] xl:mx-auto mb-60 mt-24">
        {isLoading ? <SkeletonProductPreview /> : productCards}
      </div>
      <div
        className="flex flex-col gap-[68px] items-center mx-6 sm:mx-10 mt-24 
       lg:max-w-6xl sm:flex-row sm:justify-between sm:gap-[10px] lg:gap-7 xl:mx-auto"
      >
        {categoryCards}
      </div>
      <About />
      <Footer />
    </>
  );
}
