
export default function InTheBox() {
  return (
    <div className="my-[90px] sm:flex sm:gap-[168px] lg:my-0 lg:flex-col lg:gap-8">
      <h3 className="uppercase font-bold leading-9 text-2xl mb-6">
        in the box
      </h3>
      <div className="flex flex-col gap-2">
        <div className="flex gap-6 text-[15px]">
          <span className="text-orange font-bold opacity-100">1x</span>
          <span className="font-medium opacity-50">Headphone Unit</span>
        </div>
        <div className="flex gap-5 text-[15px]">
          <span className="text-orange font-bold opacity-100">2x</span>
          <span className="font-medium opacity-50">Replacement Earcups</span>
        </div>
        <div className="flex gap-6 text-[15px]">
          <span className="text-orange font-bold opacity-100">1x</span>
          <span className="font-medium opacity-50">Replacement Earcups</span>
        </div>
        <div className="flex gap-6 text-[15px]">
          <span className="text-orange font-bold opacity-100">1x</span>
          <span className="font-medium opacity-50">3.5mm Audio Cable</span>
        </div>
        <div className="flex gap-6 text-[15px]">
          <span className="text-orange font-bold opacity-100">1x</span>
          <span className="font-medium opacity-50">Travel Bag</span>
        </div>
      </div>
    </div>
  );
}
