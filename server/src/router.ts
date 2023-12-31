import { Router } from 'express';
import { getHeadphones } from './handlers/products/headphones';
import { getSpeakers } from './handlers/products/speakers';
import { getEarphones } from './handlers/products/earphones';
import { getProduct } from './handlers/products/getProduct';
import { getCartItems } from './handlers/cart/getCartItems';
import protect from './handlers/auth/protect';
import { increaseItemQuantity } from './handlers/cart/increaseItemQuantity';
import { decreaseItemQuantity } from './handlers/cart/decreaseItemQuantity';
import { removeAll } from './handlers/cart/removeAll';
import { addItem } from './handlers/cart/addItem';

const router = Router();

router.get('/headphones', getHeadphones);
router.get('/speakers', getSpeakers);
router.get('/earphones', getEarphones);
router.get('/product-details/:product', getProduct);
router.get('/cart-items', protect, getCartItems);
router.post('/add-item', protect, addItem);
router.post('/increase-quantity', protect, increaseItemQuantity);
router.post('/decrease-quantity', protect, decreaseItemQuantity);
router.post('/remove-all', protect, removeAll);
export default router;
