import CategoryCard from './CategoryCard';
import { categories } from '../utils';
import {
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from 'framer-motion';
interface MenuPropTypes {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navRef: React.RefObject<HTMLDivElement>;
}
export default function Menu({ navOpen, setNavOpen, navRef }: MenuPropTypes) {
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
    <AnimatePresence>
      {navOpen && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: 1,
            transition: {
              duration: 0.25,
              ease: easeIn,
            },
          }}
          exit={{
            scaleY: 0,
            transition: {
              duration: 0.25,
              ease: easeOut,
            },
          }}
          className="bg-white absolute top-[73.6px] w-screen flex flex-col gap-[68px] px-6 pt-20 pb-8 z-10 sm:flex-row sm:gap-3 sm:px-10 sm:pb-16 sm:pt-[108px] lg:hidden origin-top"
          ref={navRef}
        >
          {categoryCards}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
