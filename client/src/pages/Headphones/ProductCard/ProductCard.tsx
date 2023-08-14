import mark2headphones from '../../assets/image-xx99-mark-two-headphones-category.jpg';
// import mark2headphonesTablet from '../../assets/image-xx99-mark-two-headphones-category-tablet.jpg';
// import mark2headphonesDesktop from "../../assets/image-xx99-mark-two-headphones-category-desktop.jpg";

export default function ProductCard() {
  return (
    <article className="flex flex-col items-center gap-8 lg:flex-row lg:w-full">
      <img
        src={mark2headphones}
        alt="mark II headphones"
        className="rounded-lg lg:max-w-[540px]"
      />
      <div className="flex flex-col text-center gap-6">
        <span className="text-orange tracking-[10px] uppercase text-sm">
          new product
        </span>
        <h3 className="uppercase font-bold tracking-[1px] text-[28px]">
          xx99 mark ii headphones
        </h3>
        <p className=" text-[15px] opacity-50 sm:max-w-xl">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="bg-orange text-white w-40 h-12 uppercase font-bold text-sm tracking-[0.0625rem] hover:bg-orange-hover">
          See product
        </button>
      </div>
    </article>
  );
}
