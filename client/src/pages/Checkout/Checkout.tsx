import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import Footer from '../../Components/Footer';
import { CheckoutData, CheckoutSchema } from '../../models/CheckoutSchema';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import Summary from './Summary/Summary';
import { useQuery } from '@tanstack/react-query';
import { getCartItems } from '../../api/api';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal/CheckoutModal';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const goBack = useNavigate();
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const methods = useForm<CheckoutData>({
    resolver: zodResolver(CheckoutSchema),
  });

  const { data } = useQuery({
    queryKey: ['cartItems'],
    queryFn: () => getCartItems(),
  });

  function onSubmit() {
    setConfirmationModalOpen(true);
  }
  return (
    <>
      <FormProvider {...methods}>
        <div className="bg-light-gray flex justify-center items-center">
          <div className="w-full mx-6 sm:mx-10 lg:max-w-6xl lg:grid grid-cols-[65%_35%] grid-rows-[5%_95%] gap-x-[30px] gap-y-8 mt-4 sm:mt-12 lg:mt-20 mb-24 sm:mb-28 lg:mb-36">
            <button
              className="bg-transparent text-[15px] font-medium opacity-50 leading-6 lg:max-w-[57px] hover:text-orange hover:opacity-100 row-start-1"
              onClick={() => goBack(-1)}
            >
              Go Back
            </button>
            <CheckoutForm
              register={methods.register}
              watch={methods.watch}
              errors={methods.formState.errors}
            />
            <Summary
              handleSubmit={methods.handleSubmit}
              onSubmit={onSubmit}
              data={data}
            />
          </div>
        </div>
        <Footer />
      </FormProvider>
      {confirmationModalOpen && (
        <>
          <CheckoutModal data={data} />
          <div className="bg-black opacity-40 h-screen w-screen fixed top-0"></div>
        </>
      )}
    </>
  );
}
