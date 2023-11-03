import { Router } from 'express';
import { getHeadphones } from './handlers/products/headphones';
import { getSpeakers } from './handlers/products/speakers';
import { getEarphones } from './handlers/products/earphones';
import { getProduct } from './handlers/products/getProduct';
import { handleSignUp } from './handlers/auth/handleSignUp';

const router = Router();

router.get('/headphones', getHeadphones);
router.get('/speakers', getSpeakers);
router.get('/earphones', getEarphones);
router.get('/product-details/:product', getProduct);
// router.get('/checkout', auth, getCheckout);
router.post('/signup', handleSignUp);
export default router;
