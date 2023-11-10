import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function protect(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: 'not valid bearer' });
    return;
  }

  const [, token] = bearer.split(' ');
  if (!token) {
    res.status(401);
    res.json({ message: 'not valid token' });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = user;
    next();
  } catch (e) {
    res.status(401);
    res.json({ message: 'not authorized' });
    return;
  }
}
