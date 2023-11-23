function SkeletonProductDetails() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-[70px] lg:w-full">
        <div className="bg-gray-300 rounded-lg h-[327px] w-[327px] sm:w-[281px] sm:h-[480px] lg:w-[540px] lg:h-[560px]" />
        <div className="flex flex-col gap-6 items-center lg:items-start">
          <span className="bg-gray-300 h-6 w-24 lg:w-32" />
          <h3 className="bg-gray-300 h-10 w-60 lg:w-96" />
          <p className="bg-gray-300 h-20 w-80 lg:w-full" />
          <span className="bg-gray-300 h-8 w-12" />
          <div className="flex gap-4">
            <div className="bg-gray-300 text-gray-300 w-32 h-12" />
            <div className="bg-gray-300 text-gray-300 w-40 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonProductDetails;
