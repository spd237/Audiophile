import { Request, Response } from 'express';
import prisma from '../../db';

export async function decreaseItemQuantity(req: Request, res: Response) {
  try {
    const updatedItem = await prisma.cartItem.update({
      where: {
        id: req.body.id,
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });
    if (updatedItem.quantity === 0) {
      await prisma.cartItem.delete({
        where: {
          id: req.body.id,
        },
      });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    console.log(error);
  }
}
