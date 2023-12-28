import { AnimatePresence, motion } from 'framer-motion';
interface OverlayProps {
  cartOpen: boolean;
  navOpen: boolean;
}
function Overlay({ cartOpen, navOpen }: OverlayProps) {
  return (
    <AnimatePresence>
      {(cartOpen || navOpen) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.4,
            transition: {
              type: 'tween',
              ease: 'easeIn',
              duration: 0.15,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              type: 'tween',
              ease: 'easeOut',
              duration: 0.15,
            },
          }}
          className="bg-black opacity-40 h-screen w-screen fixed top-0"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

export default Overlay;
