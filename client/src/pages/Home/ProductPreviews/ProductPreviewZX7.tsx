import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductPreviewZX7() {
  return (
    <motion.article
      initial={
        window.innerWidth > 640 ? { opacity: 0, x: -200 } : { opacity: 1, x: 0 }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          ease: 'easeIn',
        },
      }}
      viewport={{ once: true, margin: '-200px' }}
      className="bg-zx7preview bg-no-repeat bg-center bg-cover flex flex-col gap-8 justify-center pl-6 w-full h-[320px] rounded-lg sm:bg-zx7previewTablet sm:pl-16 lg:bg-zx7previewDesktop"
    >
      <span className="uppercase text-black text-[28px] font-bold tracking-[2px]">
        zx7 speaker
      </span>
      <Link to={'/product-details/zx7-speaker'} className="w-fit">
        <button className="bg-transparent w-40 h-12 uppercase text-[13px] font-bold tracking-[1px] border-2 border-black shadow-[inset_0_0_0_0_#000000] hover:shadow-[inset_328px_0_0_0_#000000] hover:text-white transition-all duration-200 ease-in">
          see product
        </button>
      </Link>
    </motion.article>
  );
}
