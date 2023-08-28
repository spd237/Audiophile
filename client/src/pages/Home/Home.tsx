import Header from "../../Components/Header";
import Hero from "./Hero/Hero";
import CategoryCard from "../../Components/CategoryCard";
import About from "../../Components/About";
import Footer from "../../Components/Footer";
import ProductPreviewXZ7 from "./ProductPreviews/Previews/ProductPreviewXZ7";
import ProductPreviewYX1 from "./ProductPreviews/Previews/ProductPreviewYX1";
import ProductPreviewZX9 from "./ProductPreviews/Previews/ProductPreviewZX9";

export default function Home() {
  return (
    <>
      <div className="w-full bg-hero-mobile min-h-[587px] bg-cover bg-no-repeat sm:bg-hero-tablet sm:min-h-[729px] lg:bg-hero-desktop bg-center lg:bg-[center_bottom_2rem]">
        <Header />
        <Hero />
      </div>
      <div className="flex flex-col items-center">
        <div className="mx-6 flex flex-col items-center sm:mx-10 lg:max-w-5xl">
          <div className="flex flex-col gap-[68px] items-center mt-24 w-full sm:flex-row sm:gap-[10px] lg:gap-7 ">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
          <div className="flex flex-col items-center gap-6 mt-[120px] lg:gap-8">
            <ProductPreviewZX9 />
            <ProductPreviewXZ7 />
            <ProductPreviewYX1 />
          </div>
          <About />
        </div>
      </div>
      <Footer />
    </>
  );
}
