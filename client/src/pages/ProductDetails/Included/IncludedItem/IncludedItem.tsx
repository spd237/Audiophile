import { InTheBox } from '../../../../types';

function IncludedItem({ quantity, item }: InTheBox) {
  return (
    <div className="flex gap-6 text-[15px]">
      <span className="text-orange font-bold opacity-100">{quantity}x</span>
      <span className="font-medium opacity-50">{item}</span>
    </div>
  );
}

export default IncludedItem;
