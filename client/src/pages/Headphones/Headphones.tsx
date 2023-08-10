import Header from "../../Components/Header";
import ProductCard from "./ProductCard/ProductCard";
import CategoryCard from "../../Components/CategoryCard";
import About from "../../Components/About";
import Footer from "../../Components/Footer";
export default function Headphones() {
  return (
    <>
      <div className="bg-black">
        <Header />
        <h2 className="uppercase text-white font-bold text-[28px] tracking-[2px] text-center py-8 px-[84px] mb-16 sm:py-24 sm:px-60">
          headphones
        </h2>
      </div>
      <div className="max-w-5xl flex flex-col items-center gap-[120px] mx-auto">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex flex-col gap-[68px] items-center mx-auto mt-24 max-w-xs sm:max-w-2xl lg:max-w-5xl sm:flex-row sm:justify-between sm:gap-[10px] lg:gap-7">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <About />
      <div className="bg-almost-black text-white">
        <Footer />
      </div>
    </>
  );
}
