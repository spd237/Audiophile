import { Router } from 'express';
import { getHeadphones } from './handlers/headphones';
import { getSpeakers } from './handlers/speakers';
import { getEarphones } from './handlers/earphones';
import { getProduct } from './handlers/getProduct';

const router = Router();

//Headphone routes
router.get('/headphones', getHeadphones);

//Speaker routes
router.get('/speakers', getSpeakers);

//Earphone routes
router.get('/earphones', getEarphones);

router.get('/product-details/:product', getProduct);

export default router;
