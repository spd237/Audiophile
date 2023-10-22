// import yx1earphones from "../../../assets/image-earphones-yx1-home-mobile.jpg";
// import yx1earphonesTablet from '../../../assets/image-earphones-yx1-home-tablet.jpg'
import yx1earphonesDesktop from '../../../assets/image-earphones-yx1-home-desktop.jpg';
import { Link } from 'react-router-dom';

export default function ProductPreviewYX1() {
  return (
    <article className="w-full flex flex-col gap-6 sm:flex-row sm:gap-3">
      <img
        src={yx1earphonesDesktop}
        alt="yx1earphones"
        className="h-[200px] sm:max-w-[50%] rounded-lg sm:h-80"
      />
      <div className="w-full h-[200px] bg-light-gray rounded-lg flex flex-col gap-8 pl-6 justify-center sm:h-80">
        <span className="uppercase text-black text-[28px] font-bold tracking-[2px]">
          yx1 earphones
        </span>
        <button className="bg-transparent max-w-[160px] h-12 border-[1.5px] border-black uppercase text-[13px] font-bold tracking-[1px] hover:bg-black hover:text-white">
          <Link to={'/product-details/yx1-earphones'}>see product</Link>
        </button>
      </div>
    </article>
  );
}
