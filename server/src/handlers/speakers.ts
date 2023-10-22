import { Request, Response } from 'express';
import prisma from '../db';

export const getSpeakers = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: {
      category: 'speakers',
    },
  });

  res.json({ data: products });
};

export const addSpeakerToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
