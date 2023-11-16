import { UseFormHandleSubmit } from 'react-hook-form';
import { CheckoutData } from '../../../models/CheckoutSchema';
import { CartItem } from '../../../types';
import { v4 as uuidv4 } from 'uuid';
import SummaryProduct from './Product/SummaryProduct';

interface SummaryProps {
  handleSubmit: UseFormHandleSubmit<CheckoutData, undefined>;
  onSubmit: (data: CheckoutData) => void;
  data: CartItem[] | undefined;
}

function Summary({ handleSubmit, onSubmit, data }: SummaryProps) {
  let totalPrice = 0;
  data?.forEach((product: CartItem) => {
    totalPrice += product.quantity * product.price;
  });

  const VAT = (0.2 * totalPrice).toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });

  const productsOnSummary = data?.map((item: CartItem) => {
    return (
      <SummaryProduct
        key={uuidv4()}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  return (
    <div className="bg-white rounded-lg px-6 py-8 flex flex-col gap-6 row-start-2 col-start-2 lg:max-h-[612px]">
      <h2 className=" text-lg uppercase font-bold tracking-[1.2px]">summary</h2>
      <div className="flex flex-col gap-6">{productsOnSummary}</div>
      <div>
        <div className="flex justify-between">
          <span className="text-[15px] font-medium uppercase opacity-50">
            total
          </span>
          <span className="text-lg font-bold uppercase">
            ${totalPrice.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[15px] font-medium uppercase opacity-50">
            shipping
          </span>
          <span className="text-lg font-bold uppercase">$50</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[15px] font-medium uppercase opacity-50">
            vat(included)
          </span>
          <span className="text-lg font-bold uppercase">${VAT}</span>
        </div>
        <div className="flex justify-between mt-6">
          <span className="text-[15px] font-medium uppercase opacity-50">
            grand total
          </span>
          <span className="text-lg font-bold uppercase text-orange">
            ${(totalPrice + 50).toLocaleString()}
          </span>
        </div>
        <button
          className="bg-orange text-white text-[13px] uppercase font-bold tracking-[1px] w-full py-4 mt-8"
          onClick={handleSubmit(onSubmit)}
        >
          continue & pay
        </button>
      </div>
    </div>
  );
}

export default Summary;
