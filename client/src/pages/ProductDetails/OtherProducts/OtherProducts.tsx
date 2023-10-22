import { Others } from '../../../types';
import { Link } from 'react-router-dom';

export default function OtherProducts({ slug, name, image }: Others) {
  return (
    <div className="flex flex-col gap-8 items-center mb-14">
      <img
        src={image.desktop}
        alt="mark1 headphones"
        className="rounded-lg sm:min-w-[220px]"
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
