import { Router } from 'express';
import { getHeadphones } from './handlers/headphones';
import { getSpeakers } from './handlers/speakers';
import { getEarphones } from './handlers/earphones';
import { getProduct } from './handlers/getProduct';

const router = Router();

router.get('/headphones', getHeadphones);
router.get('/speakers', getSpeakers);
router.get('/earphones', getEarphones);

router.get('/product-details/:product', getProduct);

export default router;
