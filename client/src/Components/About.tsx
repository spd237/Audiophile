import aboutPicDesktop from '../assets/image-best-gear-desktop.jpg';

export default function About() {
  return (
    <article className="my-[120px] flex flex-col items-center gap-8 mx-6 lg:flex-row justify-center sm:mx-10 lg:max-w-6xl lg:mx-auto lg:justify-between">
      <img
        srcSet="/src/assets/image-best-gear.jpg 327w, /src/assets/image-best-gear-tablet.jpg 689w, /src/assets/image-best-gear-desktop.jpg 540w"
        sizes="(max-width: 670px) 327px, (max-width: 1024px) 689px, 540px"
        src={aboutPicDesktop}
        alt="about-pic"
        className="rounded-lg lg:max-w-[50%] lg:h-[588px] lg:order-2"
      />
      <div className="flex flex-col items-center lg:items-start">
        <h3 className="uppercase text-black text-[28px] font-bold tracking-[2px] text-center mb-8 md:max-w-sm lg:text-left lg:text-[40px] leading-[44px]">
          bringing you the <span className="text-orange">best </span>audio gear
        </h3>
        <p className=" text-[15px] font-medium leading-[25px] text-center opacity-50 md:max-w-lg lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </article>
  );
}
