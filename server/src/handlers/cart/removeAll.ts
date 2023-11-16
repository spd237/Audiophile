import { Request, Response } from 'express';
import prisma from '../../db';

export async function removeAll(req: Request, res: Response) {
  try {
    const removeAllItems = await prisma.cartItem.deleteMany({
      where: {
        userID: req.user.sub,
      },
    });
    res.status(200).json(removeAllItems);
  } catch (error) {
    console.log(error);
  }
}
