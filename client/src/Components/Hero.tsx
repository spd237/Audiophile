export default function Hero() {
  return (
    <section className="bg-hero-mobile bg-center bg-cover bg-no-repeat text-white h-[510px] flex flex-col items-center justify-center">
      <h3 className="mb-4 tracking-[10px] opacity-50 uppercase text-sm">
        New Product
      </h3>
      <h2 className=" font-bold text-4xl text-center">
        XX99 MARK II HEADPHONES
      </h2>
      <p className="text-center opacity-75 font-medium text-[0.9375rem] leading-6 mx-5 mt-6 mb-7">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <button className="bg-orange text-white w-40 h-12 uppercase font-bold text-sm tracking-[0.0625rem]">
        See product
      </button>
    </section>
  );
}
