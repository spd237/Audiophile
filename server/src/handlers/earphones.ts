import { Request, Response } from 'express';
import prisma from '../db';

export const getEarphones = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: {
      category: 'earphones',
    },
  });

  res.json({ data: products });
};

export const addEarphoneToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
