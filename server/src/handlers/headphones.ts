import { Request, Response } from 'express';
import prisma from '../db';

export const getHeadphones = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: {
      category: 'headphones',
    },
  });

  res.json({ products });
};

export const getOneHeadphone = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const headphone = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  res.json({ headphone });
};

export const addHeadphoneToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
