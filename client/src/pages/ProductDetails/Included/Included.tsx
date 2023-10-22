import { InTheBox } from '../../../types';
import IncludedItem from './IncludedItem/IncludedItem';

export default function Included({
  inTheBox,
}: {
  inTheBox: InTheBox[] | undefined;
}) {
  const includedItems = inTheBox?.map((item, index) => {
    return (
      <IncludedItem key={index} quantity={item.quantity} item={item.item} />
    );
  });

  return (
    <div className="my-[90px] sm:flex sm:gap-[168px] lg:my-0 lg:flex-col lg:gap-8">
      <h3 className="uppercase font-bold leading-9 text-2xl mb-6">
        in the box
      </h3>
      <div className="flex flex-col gap-2">{includedItems}</div>
    </div>
  );
}
