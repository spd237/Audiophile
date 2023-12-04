import axios from 'axios';
import { CartItem, ProductType } from '../types';

const API_URL = 'https://audiophile-api-bxsi.onrender.com';

const api = axios.create({
  baseURL: API_URL,
});

export async function getCategory(
  category: string | undefined
): Promise<ProductType[]> {
  const response = await api.get(`/audiophile/${category}`);
  return response.data;
}

export async function getProduct(
  slug: string | undefined
): Promise<ProductType> {
  const response = await api.get(`/audiophile/product-details/${slug}`, {
    data: slug,
  });
  return response.data;
}

export async function createUser(
  id: string | undefined,
  cartItems: CartItem[] | []
) {
  const response = await api.post('/signup', { id, cartItems });
  return response.data;
}

export async function updateUser(
  id: string | undefined,
  cartItems: CartItem[] | []
) {
  const response = await api.post('/signin', { id, cartItems });
  return response.data;
}

export async function getCartItems(token: string): Promise<CartItem[]> {
  const response = await api.get(`/audiophile/cart-items`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function addToCart(
  token: string,
  name: string | undefined,
  quantity: number,
  price: number | undefined
) {
  const response = await api.post(
    '/audiophile/add-item',
    { name, quantity, price },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}

export async function increaseQuantity(
  token: string,
  id: string
): Promise<CartItem> {
  const response = await api.post(
    '/audiophile/increase-quantity',
    { id },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}
export async function decreaseQuantity(
  token: string,
  id: string
): Promise<CartItem> {
  const response = await api.post(
    '/audiophile/decrease-quantity',
    { id },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}

export async function removeAllItems(token: string) {
  const response = await api.post('/audiophile/remove-all', null, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
