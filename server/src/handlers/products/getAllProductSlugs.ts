import { Request, Response } from 'express';
import prisma from '../../db';

export async function getAllProductSlugs(req: Request, res: Response) {
  try {
    const products = await prisma.product.findMany({
      select: {
        slug: true,
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}
