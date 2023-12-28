import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Nav() {
  return (
    <motion.ul
      variants={list}
      initial="hidden"
      animate="show"
      className="hidden lg:flex uppercase text-[13px] font-bold leading-[25px] tracking-[2px] text-white gap-[34px] mx-auto items-center "
    >
      <motion.li
        variants={listItem}
        className="cursor-pointer hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]"
      >
        <Link to={'/'}>home</Link>
      </motion.li>
      <motion.li
        variants={listItem}
        className="cursor-pointer hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]"
      >
        <Link to={'/headphones'}>headphones</Link>
      </motion.li>
      <motion.li
        variants={listItem}
        className="cursor-pointer hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]"
      >
        <Link to={'/speakers'}>speakers</Link>
      </motion.li>
      <motion.li
        variants={listItem}
        className="cursor-pointer hover:text-orange bg-gradient-to-r from-orange to-orange bg-[length:0%_2px] bg-[100%_100%] bg-no-repeat transition-[background-size] duration-200 ease-in-out hover:bg-[length:100%_2px] hover:bg-[0%_100%]"
      >
        <Link to={'/earphones'}>earphones</Link>
      </motion.li>
    </motion.ul>
  );
}

export default Nav;
