import headphonesThumbnail from "../assets/headphone-thumbnail.png";
import earphonesThumbnail from "../assets/earphone-thumbnail.png";
import speakersThumbnail from "../assets/speaker-thumbnail.png";
import CategoryCard from "./CategoryCard";

export default function Menu() {
  return (
    <div className="bg-white absolute top-[73.6px] w-screen flex flex-col gap-[68px] px-6 pt-20 pb-8 z-10 sm:flex-row sm:gap-3 sm:px-10 sm:pb-16 sm:pt-[108px]">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
}
