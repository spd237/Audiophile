import { Request, Response } from 'express';
import prisma from '../../db';

export async function getEarphones(req: Request, res: Response) {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: 'earphones',
      },
    });
    res.json({ data: products });
  } catch (error) {
    res.status(500).json('server error');
  }
}

export const addEarphoneToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
