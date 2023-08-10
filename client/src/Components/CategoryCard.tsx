import headphoneImg from "../assets/headphone-thumbnail.png";
export default function CategoryCard() {
  return (
    <article className="flex flex-col justify-center items-center w-full bg-light-gray h-[165px] rounded-lg relative">
      <img
        src={headphoneImg}
        alt="headphoneImg"
        className="absolute -top-14 drop-shadow-[0px_25px_25px_rgba(0,0,0,0.45)]"
      />

      <span className="uppercase tracking-[1px] font-bold text-[15px] mb-4 mt-9 ">
        headphones
      </span>
      <div className="flex items-center gap-3">
        <span className="text-[13px] opacity-50 font-bold uppercase tracking-[1px] hover:text-orange cursor-pointer hover:opacity-100">
          shop
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path
            d="M1.32227 1L6.32227 6L1.32227 11"
            stroke="#D87D4A"
            stroke-width="2"
          />
        </svg>
      </div>
    </article>
  );
}
