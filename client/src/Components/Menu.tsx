import CategoryCard from './CategoryCard';
import { categories } from '../utils';
interface MenuPropTypes {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navRef: React.RefObject<HTMLDivElement>;
}
export default function Menu({ setNavOpen, navRef }: MenuPropTypes) {
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
    <div
      className="bg-white absolute top-[73.6px] w-screen flex flex-col gap-[68px] px-6 pt-20 pb-8 z-10 sm:flex-row sm:gap-3 sm:px-10 sm:pb-16 sm:pt-[108px] lg:hidden"
      ref={navRef}
    >
      {categoryCards}
    </div>
  );
}
