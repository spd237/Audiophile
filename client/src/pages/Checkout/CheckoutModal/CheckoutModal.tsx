import checkmark from '../../../assets/icon-order-confirmation.svg';
import { CartItem } from '../../../types';
import { v4 as uuidv4 } from 'uuid';
import ConfirmedProduct from './ConfirmedProduct/ConfirmedProduct';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeAllItems } from '../../../api/api';

export default function CheckoutModal({
  data,
}: {
  data: CartItem[] | undefined;
}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const confirmedProducts = data?.map((item: CartItem) => {
    return (
      <ConfirmedProduct
        key={uuidv4()}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  let totalPrice = 0;
  data?.forEach((product: CartItem) => {
    totalPrice += product.quantity * product.price;
  });

  const removeAllMutation = useMutation({
    mutationFn: () => removeAllItems(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItems'] });
    },
  });

  function handleConfirmation() {
    removeAllMutation.mutate();
    navigate('/');
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-10">
      <div className="bg-white m-auto relative left-0 right-0 max-w-xs p-8 rounded-lg sm:min-w-[540px]">
        <img src={checkmark} alt="checkmark" />
        <h2 className="uppercase text-[24px] font-bold mt-6 mb-4 leading-7 tracking-[0.85px] sm:text-[32px] sm:tracking-[1.143px] sm:leading-9 sm:max-w-xs">
          thank you for your order
        </h2>
        <span className="text-[15px] opacity-50">
          You will recieve an email confirmation shortly.
        </span>
        <div className="mt-6 sm:flex">
          <div className="bg-light-gray flex flex-col justify-center p-6 rounded-t-lg sm:min-w-[246px] sm:rounded-t-none sm:rounded-l-lg">
            <div
              className={`flex flex-col gap-4 relative after:absolute after:bg-black after:opacity-[0.08] after:w-full after:-bottom-3 ${
                data && data?.length >= 2 ? 'after:h-[1px]' : ''
              }`}
            >
              {confirmedProducts &&
                (expanded ? confirmedProducts : confirmedProducts[0])}
            </div>
            {data && data?.length >= 2 && (
              <span
                className="opacity-50 font-bold text-xs tracking-[-0.2px] self-center mt-6 cursor-pointer hover:underline"
                onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
              >
                {expanded
                  ? 'View less'
                  : `and ${data?.length - 1} other item(s)`}
              </span>
            )}
          </div>
          <div className="bg-black flex flex-col gap-2 p-6 rounded-b-lg sm:w-full sm:rounded-b-none sm:rounded-r-lg justify-end">
            <span className="font-bold text-[15px] text-white opacity-50 uppercase">
              grand total
            </span>
            <span className="text-white font-bold text-[18px]">
              ${(totalPrice + 50).toLocaleString()}
            </span>
          </div>
        </div>
        <button
          className="bg-orange text-white font-bold text-[13px] w-full uppercase mt-6 py-4 tracking-[1px] sm:mt-[46px] border-2 border-orange shadow-[inset_0_0_0_0_#ffffff] hover:shadow-[inset_476px_0_0_0_#ffffff] transition-all duration-200 ease-in hover:text-orange"
          onClick={handleConfirmation}
        >
          back to home
        </button>
      </div>
    </div>
  );
}
