import { Request, Response } from 'express';
import prisma from '../../db';

export async function increaseItemQuantity(req: Request, res: Response) {
  try {
    const updatedItem = await prisma.cartItem.update({
      where: {
        id: req.body.id,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });
    res.json({ updatedItem });
  } catch (error) {
    console.log(error);
  }
}
