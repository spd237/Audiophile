import { Request, Response } from 'express';
import prisma from '../db';

export const getEarphones = async (req: Request, res: Response) => {
  const earphones = await prisma.product.findMany({
    where: {
      category: 'earphones',
    },
  });

  res.json({ earphones });
};

export const getOneEarphone = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const earphone = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  res.json({ earphone });
};

export const addEarphoneToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
