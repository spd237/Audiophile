import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: JSX.Element;
  width?: 'fit' | 'full';
}

function Reveal({ children, width = 'fit' }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({ opacity: 1, y: 0 });
      slideControls.start({ bottom: '100%' });
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative w-${width} overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ bottom: 0 }}
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="absolute top-4 bottom-4 left-0 right-0 bg-orange z-100"
      />
    </div>
  );
}

export default Reveal;
