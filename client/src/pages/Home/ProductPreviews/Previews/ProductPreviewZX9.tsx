// import zx9speakerMobile from "../../../../assets/image-speaker-zx9-home-mobile.png";
// import zx9speakerTablet from '../../../../assets/image-speaker-zx9-tablet.png'
import zx9speakerDesktop from "../../../../assets/image-speaker-zx9-desktop.png";
export default function ProductPreviewZX9() {
  return (
    <article className="bg-orange bg-pattern-circles bg-no-repeat bg-cover bg-[center_bottom_8.5rem] w-full flex flex-col items-center h-[600px] sm:h-[720px] sm:bg-[center_bottom_11rem] lg:h-[560px] rounded-lg text-white py-[55px] relative overflow-hidden lg:flex-row lg:gap-[255px] lg:bg-[top_right_12.5rem]">
      <img
        src={zx9speakerDesktop}
        alt="zx9 speaker"
        className="w-[172px] h-[207px] sm:w-[197px] sm:h-[237px] lg:w-[410px] lg:h-[493px] lg:relative top-12 left-[117px] z-10"
      />
      <div className="flex flex-col items-center lg:items-start">
        <span className="uppercase text-4xl font-bold tracking-[1.286px] flex flex-col items-center mt-8 mb-6 lg:items-start">
          zx9
          <span className="uppercase text-4xl font-bold tracking-[1.286px]">
            speaker
          </span>
        </span>
        <p className=" opacity-75 text-center text-[15px] font-medium leading-[25px] mx-6 mb-6 sm:max-w-[50%] lg:text-left lg:mx-0 lg:max-w-[90%]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="bg-black w-40 h-12 uppercase font-bold text-[13px] hover:bg-zx9-hover">
          see product
        </button>
      </div>
    </article>
  );
}
