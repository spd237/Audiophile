import { Gallery } from '../../../types';

function ArtisticImages({ images }: { images: Gallery }) {
  return (
    <div className="w-full flex flex-col gap-5 sm:grid grid-rows-2 grid-cols-[41.5%_58.5%] sm:gap-4 lg:gap-x-0">
      <img
        srcSet={`${images.first.mobile} 327w, ${images.first.tablet} 277w, ${images.first.desktop} 445w`}
        sizes="(max-width: 640px) 327px, (max-width: 1024px) 277px, 445px"
        alt="gallery img"
        className="rounded-lg self-start"
        src={images.first.desktop}
        loading="lazy"
      />
      <img
        srcSet={`${images.second.mobile} 327w, ${images.second.tablet} 277w, ${images.second.desktop} 445w`}
        sizes="(max-width: 640px) 327px, (max-width: 1024px) 277px, 445px"
        alt="gallery img"
        className="rounded-lg row-start-2 self-end"
        src={images?.second.desktop}
        loading="lazy"
      />
      <img
        srcSet={`${images.third.mobile} 327w, ${images.third.tablet} 395w, ${images.third.desktop} 635w`}
        sizes="(max-width: 640px) 327px, (max-width: 1024px) 395px, 635px"
        alt="gallery img"
        className="row-start-1 row-span-2 rounded-lg"
        src={images.third.desktop}
        loading="lazy"
      />
    </div>
  );
}

export default ArtisticImages;
