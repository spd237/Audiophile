// import aboutPic from "../assets/aboutpic.png";
// import aboutPicTablet from "../assets/aboutpictablet.jpg";
import aboutPicDesktop from "../assets/aboutpicdesktop.jpg";
export default function About() {
  return (
    <article className="mt-[120px] max-w-xs sm:max-w-2xl lg:max-w-5xl  flex flex-col items-center gap-8 lg:flex-row justify-center mx-auto">
      <img
        src={aboutPicDesktop}
        alt="about-pic"
        className="rounded-lg lg:max-w-[50%] lg:w-[540px] lg:h-[588px] lg:order-2"
      />
      <div className="max-w-[91%] flex flex-col items-center lg:items-start">
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
