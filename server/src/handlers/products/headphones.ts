import { NextFunction, Request, Response } from 'express';
import prisma from '../../db';

export async function getHeadphones(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: 'headphones',
      },
    });
    res.json(products);
    next();
  } catch (error) {
    res.status(500).json(error);
  }
}
