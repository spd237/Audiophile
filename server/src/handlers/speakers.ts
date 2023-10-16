import { Request, Response } from 'express';
import prisma from '../db';

export const getSpeakers = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: {
      category: 'speakers',
    },
  });

  res.json({ products });
};

export const getOneSpeaker = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const speaker = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  res.json({ speaker });
};

export const addSpeakerToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
