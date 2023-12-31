import { AnimatePresence, motion } from 'framer-motion';
import { renderCategoryCards } from '../utils/renderCategoryCards';
interface MenuPropTypes {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navRef: React.RefObject<HTMLDivElement>;
}
export default function Menu({ navOpen, setNavOpen, navRef }: MenuPropTypes) {
  const categoryCards = renderCategoryCards(setNavOpen);
  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.25,
              ease: 'easeIn',
            },
          }}
          exit={{
            opacity: 0,
            y: -5,
            transition: {
              duration: 0.25,
              ease: 'easeOut',
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
