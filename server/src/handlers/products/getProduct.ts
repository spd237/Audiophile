import { Request, Response } from 'express';
import prisma from '../../db';

export async function getProduct(req: Request, res: Response) {
  try {
    const slug = req.params.product;
    const product = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
    });
    res.json({ data: product });
  } catch (error) {
    res.status(500).json('server error');
  }
}
