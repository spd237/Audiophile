import { Request, Response } from 'express';
import prisma from '../db';

export const getProduct = async (req: Request, res: Response) => {
  const slug = req.params.product;
  const product = await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });
  res.json({ data: product });
};
