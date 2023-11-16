import { Request, Response } from 'express';
import prisma from '../../db';

export async function getCartItems(req: Request, res: Response) {
  try {
    const cartItems = await prisma.cartItem.findMany({
      where: {
        userID: req.user.sub,
      },
    });
    res.json(cartItems);
  } catch (error) {
    console.log(error);
  }
}
