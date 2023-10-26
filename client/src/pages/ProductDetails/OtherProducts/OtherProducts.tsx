import { Others } from '../../../types';
import { Link } from 'react-router-dom';

export default function OtherProducts({ slug, name, image }: Others) {
  return (
    <div className="flex flex-col gap-8 items-center mb-14">
      <img
        srcSet={`${image.mobile} 327w, ${image.tablet} 223w, ${image.desktop} 350w`}
        sizes="(max-width: 640px) 327px, (max-width: 1024px) 223px, 350px"
        alt="mark1 headphones"
        className="rounded-lg"
        src={image.desktop}
      />
      <h4 className="font-bold text-2xl tracking-[1.7px] text-center">
        {name}
      </h4>
      <button className="bg-orange text-white font-bold text-[13px] uppercase tracking-[1px] py-[15px] px-8 hover:bg-orange-hover">
        <Link to={`/product-details/${slug}`}>see product</Link>
      </button>
    </div>
  );
}
