import { z } from 'zod';

export type CheckoutData = z.infer<typeof CheckoutSchema>;

export const CheckoutSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Please enter a valid name' })
    .max(255, { message: 'Please enter a valid name' }),
  email: z.string().email({ message: 'Wrong format' }),
  phoneNumber: z.string().min(10, { message: 'Wrong format' }),
  address: z.string().min(1, { message: "Field can't be empty" }),
  zipCode: z.string().min(4, { message: 'Wrong format' }),
  city: z.string().min(2, { message: 'Wrong format' }),
  country: z.string().min(2, { message: "Field can't be empty" }),
  paymentDetails: z
    .object({
      paymentMethod: z.enum(['eMoney', 'cashOnDelivery'], {
        errorMap: () => ({
          message: 'Please select a payment method',
        }),
      }),
      eMoneyNumber: z.string().optional(),
      eMoneyPIN: z.string().optional(),
    })
    .refine(
      (data) => {
        if (
          data.paymentMethod === 'eMoney' &&
          (!data.eMoneyPIN || !data.eMoneyNumber)
        )
          return false;
        return true;
      },
      {
        message: 'e-Money details are required when e-Money is selected',
      }
    ),
});
