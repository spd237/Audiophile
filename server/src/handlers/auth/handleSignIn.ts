import { Request, Response } from 'express';
import prisma from '../../db';

export async function handleSignIn(req: Request, res: Response) {
  try {
    const cartItems = await prisma.cartItem.findMany({
      where: {
        userID: req.body.id,
      },
    });

    const existingItems = cartItems.map((item) => item.name);

    if (Array.isArray(req.body.cartItems)) {
      req.body.cartItems = req.body.cartItems.filter(
        (item: { name: string; quantity: number; price: number }) =>
          !existingItems.includes(item.name)
      );
    }

    const user = await prisma.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        cartItems: {
          create: req.body.cartItems,
        },
      },
      include: {
        cartItems: true,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}
