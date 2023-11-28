import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { CheckoutData } from '../../../models/CheckoutSchema';
import cashOnDeliveryIcon from '../../../assets/cashOnDeliveryIcon.svg';

interface CheckoutFormProps {
  register: UseFormRegister<CheckoutData>;
  errors: FieldErrors<CheckoutData>;
  watch: UseFormWatch<CheckoutData>;
}

function CheckoutForm({ register, errors, watch }: CheckoutFormProps) {
  const paymentMethod = watch('paymentDetails.paymentMethod');
  return (
    <form className="bg-white rounded-lg px-12 pt-14 pb-12 flex flex-col gap-8 mb-8 row-start-2 lg:mb-0">
      <div>
        <h2 className="uppercase text-[28px] tracking-[1px] font-bold mb-8">
          checkout
        </h2>
        <div className="flex flex-col gap-4 sm:grid grid-cols-2 grid-rows-[20%_40%_40%]">
          <h3 className="text-orange text-[13px] uppercase tracking-[0.9px] font-bold leading-6">
            billing details
          </h3>
          <div className="flex flex-col gap-[9px] row-start-2 col-start-1">
            <label
              htmlFor="name"
              className="text-xs font-bold tracking-[-0.2px] flex justify-between"
            >
              Name
              <span className="text-error-red font-medium">
                {errors.name?.message}
              </span>
            </label>
            <input
              type="text"
              id="name"
              className={`rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
                !errors.name?.message
                  ? 'border border-input-border-color focus:border-orange'
                  : 'border-error-red border-2 focus:border-error-red'
              }`}
              placeholder="Alexei Ward"
              {...register('name')}
            />
          </div>
          <div className="flex flex-col gap-[9px] row-start-2 col-start-2">
            <label
              htmlFor="email"
              className="text-xs font-bold tracking-[-0.2px] flex justify-between"
            >
              Email
              <span className="text-error-red font-medium">
                {errors.email?.message}
              </span>
            </label>
            <input
              type="email"
              id="email"
              className={` rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
                !errors.email?.message
                  ? 'border border-input-border-color focus:border-orange'
                  : 'border-error-red border-2 focus:border-error-red'
              }`}
              placeholder="alexei@gmail.com"
              {...register('email')}
            />
          </div>
          <div className="flex flex-col gap-[9px] row-start-3">
            <label
              htmlFor="tel"
              className="text-xs font-bold tracking-[-0.2px] flex justify-between"
            >
              Phone Number
              <span className="text-error-red font-medium">
                {errors.phoneNumber?.message}
              </span>
            </label>
            <input
              type="tel"
              id="tel"
              className={` rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
                !errors.phoneNumber?.message
                  ? 'border border-input-border-color focus:border-orange'
                  : 'border-error-red border-2 focus:border-error-red'
              }`}
              placeholder="+1 (202) 555-0136 "
              {...register('phoneNumber')}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:grid grid-cols-2 grid-rows-[10%_30%_30%_30%]">
        <h3 className="text-orange text-[13px] uppercase tracking-[0.9px] font-bold leading-6">
          shipping info
        </h3>
        <div className="flex flex-col gap-[9px] row-start-2 col-span-2">
          <label
            htmlFor="address"
            className="text-xs font-bold tracking-[-0.2px] flex justify-between"
          >
            Your address
            <span className="text-error-red font-medium">
              {errors.address?.message}
            </span>
          </label>
          <input
            type="text"
            id="address"
            className={` rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
              !errors.address?.message
                ? 'border border-input-border-color focus:border-orange'
                : 'border-error-red border-2 focus:border-error-red'
            }`}
            placeholder="1137 Williams Avenue"
            {...register('address')}
          />
        </div>
        <div className="flex flex-col gap-[9px] row-start-3">
          <label
            htmlFor="zip"
            className="text-xs font-bold tracking-[-0.2px] flex justify-between"
          >
            Zip Code
            <span className="text-error-red font-medium">
              {errors.zipCode?.message}
            </span>
          </label>
          <input
            type="text"
            id="zip"
            className={` rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
              !errors.zipCode?.message
                ? 'border border-input-border-color focus:border-orange'
                : 'border-error-red border-2 focus:border-error-red'
            }`}
            placeholder="10001"
            {...register('zipCode')}
          />
        </div>
        <div className="flex flex-col gap-[9px] row-start-3 col-start-2">
          <label
            htmlFor="city"
            className="text-xs font-bold tracking-[-0.2px] flex justify-between"
          >
            City
            <span className="text-error-red font-medium">
              {errors.city?.message}
            </span>
          </label>
          <input
            type="text"
            id="city"
            className={` rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
              !errors.city?.message
                ? 'border border-input-border-color focus:border-orange'
                : 'border-error-red border-2 focus:border-error-red'
            }`}
            placeholder="New York"
            {...register('city')}
          />
        </div>
        <div className="flex flex-col gap-[9px] row-start-4">
          <label
            htmlFor="country"
            className="text-xs font-bold tracking-[-0.2px] flex justify-between"
          >
            Country
            <span className="text-error-red font-medium">
              {errors.country?.message}
            </span>
          </label>
          <input
            type="text"
            id="country"
            className={` rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
              !errors.country?.message
                ? 'border border-input-border-color focus:border-orange'
                : 'border-error-red border-2 focus:border-error-red'
            }`}
            placeholder="United States"
            {...register('country')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:grid grid-cols-2 grid-rows-[10%_30%_30%_30%]">
        <h3 className="text-orange text-[13px] uppercase tracking-[0.9px] font-bold leading-6">
          payment details
        </h3>
        <span className="text-xs font-bold tracking-[-0.2px] row-start-2">
          Payment Method
        </span>
        <div className="flex flex-col gap-4 row-start-2 col-start-2">
          <label
            className={`text-sm font-bold tracking-[-0.2px] relative flex gap-8 border border-input-border-color cursor-pointer rounded-lg px-4 py-[18px]  before:h-5 before:w-5 before:border before:border-input-border-color before:rounded-full before:absolute ${
              paymentMethod === 'eMoney' &&
              'before:bg-radio-background before:bg-no-repeat before:bg-center border-orange'
            }`}
          >
            <input
              type="radio"
              id="e-money"
              value="eMoney"
              className="appearance-none"
              {...register('paymentDetails.paymentMethod')}
            />
            e-Money
          </label>
          <label
            className={`text-sm font-bold tracking-[-0.2px] relative flex gap-8 border border-input-border-color rounded-lg px-4 py-[18px] cursor-pointer  before:h-5 before:w-5 before:border before:border-input-border-color before:rounded-full before:absolute before:bg-center ${
              paymentMethod === 'cashOnDelivery' &&
              'before:bg-radio-background before:bg-no-repeat before:bg-center border-orange'
            }`}
          >
            <input
              type="radio"
              id="cash"
              value="cashOnDelivery"
              className="appearance-none"
              {...register('paymentDetails.paymentMethod')}
            />
            Cash on Delivery
          </label>
        </div>
        {paymentMethod === 'eMoney' ? (
          <>
            <span className="text-error-red font-medium text-xs">
              {errors.paymentDetails?.root?.message}
            </span>
            <div className="row-start-3 col-start-1 col-span-2 flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-col gap-[9px] w-full">
                <label
                  htmlFor="e-money-nr"
                  className="text-xs font-bold tracking-[-0.2px]"
                >
                  e-Money Number
                </label>
                <input
                  type="text"
                  id="e-money-nr"
                  className={` rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
                    !errors.paymentDetails?.root?.message
                      ? 'border border-input-border-color focus:border-orange'
                      : 'border-error-red border-2 focus:border-error-red'
                  }`}
                  placeholder="238521993"
                  maxLength={9}
                  {...register('paymentDetails.eMoneyNumber')}
                />
              </div>
              <div className="flex flex-col gap-[9px] w-full">
                <label
                  htmlFor="e-money-pin"
                  className="text-xs font-bold tracking-[-0.2px]"
                >
                  e-Money PIN
                </label>
                <input
                  type="text"
                  id="e-money-pin"
                  className={` rounded-lg px-6 py-[18px] text-sm font-bold text-black caret-orange focus:outline-none ${
                    !errors.paymentDetails?.root?.message
                      ? 'border border-input-border-color focus:border-orange'
                      : 'border-error-red border-2 focus:border-error-red'
                  }`}
                  placeholder="6891"
                  maxLength={4}
                  {...register('paymentDetails.eMoneyPIN')}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="row-start-3 col-span-2 flex justify-between gap-8">
            <img src={cashOnDeliveryIcon} alt="cashOnDelivery" />
            <p className="font-medium opacity-50 text-[15px]">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default CheckoutForm;
