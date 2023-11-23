import yx1earphones from '../../../assets/image-earphones-yx1-home-mobile.jpg';
import yx1earphonesTablet from '../../../assets/image-earphones-yx1-home-tablet.jpg';
import yx1earphonesDesktop from '../../../assets/image-earphones-yx1-home-desktop.jpg';
import { Link } from 'react-router-dom';

export default function ProductPreviewYX1() {
  return (
    <article className="w-full flex flex-col gap-6 sm:flex-row sm:gap-3">
      <img
        srcSet={`${yx1earphones} 327w, ${yx1earphonesTablet} 339w, ${yx1earphonesDesktop} 540w`}
        sizes="(max-width: 640px) 327px, (max-width: 1024px) 339px, 540px"
        alt="yx1earphones"
        className="h-[200px] sm:max-w-[50%] rounded-lg sm:h-80"
        src={yx1earphonesDesktop}
      />
      <div className="w-full h-[200px] bg-light-gray rounded-lg flex flex-col gap-8 pl-6 justify-center sm:h-80">
        <span className="uppercase text-black text-[28px] font-bold tracking-[2px]">
          yx1 earphones
        </span>
        <Link to={'/product-details/yx1-earphones'}>
          <button className="bg-transparent w-40 h-12 uppercase text-[13px] font-bold tracking-[1px] hover:bg-black border-2 border-black shadow-[inset_0_0_0_0_#000000] hover:shadow-[inset_328px_0_0_0_#000000] hover:text-white transition-all duration-200 ease-in">
            see product
          </button>
        </Link>
      </div>
    </article>
  );
}
