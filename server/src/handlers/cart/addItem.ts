import { Request, Response } from 'express';
import prisma from '../../db';

export async function addItem(req: Request, res: Response) {
  const { name, quantity, price } = req.body;
  try {
    const item = await prisma.cartItem.findFirst({
      where: {
        userID: req.user.sub,
        name: name,
      },
    });

    if (item) {
      const updatedItem = await prisma.cartItem.update({
        where: {
          id: item.id,
        },
        data: {
          quantity: item.quantity + quantity,
        },
      });
      res.status(200).json(updatedItem);
    } else {
      const newItem = await prisma.cartItem.create({
        data: {
          name: name,
          quantity: quantity,
          price: price,
          userID: req.user.sub,
        },
      });
      res.status(200).json(newItem);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
