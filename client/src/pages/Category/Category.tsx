import ProductCard from './ProductCard/ProductCard';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import SkeletonProductPreview from '../../Components/Skeletons/SkeletonProductPreview';
import { renderCategoryCards } from '../../utils/renderCategoryCards';
import { useGetCategoryQuery } from '../../services/ReduxApi/reduxApi';

export default function Category({
  setNavOpen,
  category,
}: {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
}) {
  const { data: categories, isLoading } = useGetCategoryQuery(category);
  const categoryCards = renderCategoryCards(setNavOpen);

  const productCards = categories?.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        isNew={product.isNew}
        description={product.description}
        images={product.categoryImage}
        slug={product.slug}
        isLoading={isLoading}
      />
    );
  });

  return (
    <>
      <div className="bg-dark-gray">
        <h2 className="uppercase text-white font-bold text-[28px] tracking-[2px] text-center py-8 px-[84px] mb-16 sm:py-24 sm:px-60">
          {category}
        </h2>
      </div>

      <div className="mx-6 sm:mx-10 lg:max-w-6xl flex flex-col items-center gap-[120px] xl:mx-auto mb-60 mt-24">
        {isLoading ? (
          <>
            <span className="absolute left-0 right-0 mx-auto max-w-fit text-sm top-96">
              Takes a second to load because free tier API hosting...
            </span>
            <SkeletonProductPreview />
          </>
        ) : (
          productCards
        )}
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
