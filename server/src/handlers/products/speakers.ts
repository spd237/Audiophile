import { Request, Response } from 'express';
import prisma from '../../db';

export async function getSpeakers(req: Request, res: Response) {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: 'speakers',
      },
    });

    res.json({ data: products });
  } catch (error) {
    res.status(500).json('server error');
  }
}

export const addSpeakerToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
