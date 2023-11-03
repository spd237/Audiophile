import { Request, Response } from 'express';
import prisma from '../../db';

export async function handleSignUp(req: Request, res: Response) {
  try {
    const user = await prisma.user.create({
      data: {
        id: req.body.id,
        cartItems: {
          create: req.body.cartItems?.map(
            (item: { name: string; quantity: number; price: number }) => {
              return {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
              };
            }
          ),
        },
      },
      include: {
        cartItems: true,
      },
    });
    res.json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
}
