import { ImagesType } from '../../../types';
import img from '../../../assets/image-xx59-category-page-preview-desktop.jpg';

interface PropsType {
  name: string;
  new: boolean;
  description: string;
  images: ImagesType;
}

export default function ProductCard(props: PropsType) {
  return (
    <article
      className={`flex flex-col items-center gap-8 lg:flex-row lg:w-full lg:gap-20 lg:first-of-type:flex-row-reverse ${
        props.new === true ? 'order-1' : 'order-2'
      }`}
    >
      <img
        src={props.images.desktop}
        alt="headphones"
        className="rounded-lg lg:max-w-[540px]"
      />

      <div className="flex flex-col gap-6 items-center lg:items-start">
        <span className="text-orange tracking-[10px] uppercase text-sm">
          {props.new && 'new product'}
        </span>
        <h3 className="uppercase font-bold tracking-[1px] text-[28px]">
          {props.name}
        </h3>
        <p className=" text-[15px] opacity-50 sm:max-w-xl">
          {props.description}
        </p>
        <button className="bg-orange text-white w-40 h-12 uppercase font-bold text-sm tracking-[0.0625rem] hover:bg-orange-hover">
          See product
        </button>
      </div>
    </article>
  );
}
