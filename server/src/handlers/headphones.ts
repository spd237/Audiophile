import { Request, Response } from 'express';
import prisma from '../db';

export const getHeadphones = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: {
      category: 'headphones',
    },
  });

  res.json({ data: products });
};

export const addHeadphoneToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
