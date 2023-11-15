import { z } from 'zod';

export type UserData = z.infer<typeof UserSchema>;

export const UserSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});
