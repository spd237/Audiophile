import { Request, Response } from 'express';
import prisma from '../db';

export const getSpeakers = async (req: Request, res: Response) => {
  const speakers = await prisma.product.findMany({
    where: {
      category: 'speakers',
    },
  });

  res.json({ speakers });
};

export const getOneSpeaker = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const speakers = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  res.json({ speakers });
};

export const addSpeakerToCart = async (req: Request, res: Response) => {
  res.send('add to cart');
};
