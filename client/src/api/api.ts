import axios from 'axios';
import { CartItem, CategoryType, ProductType } from '../types';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

type ProductResponseType = {
  data: ProductType;
};

export const getHeadphones = async (): Promise<CategoryType> => {
  const response = await api.get('/audiophile/headphones');
  return response.data;
};
export const getSpeakers = async (): Promise<CategoryType> => {
  const response = await api.get('/audiophile/speakers');
  return response.data;
};
export const getEarphones = async (): Promise<CategoryType> => {
  const response = await api.get('/audiophile/earphones');
  return response.data;
};

export const getProduct = async (
  slug: string | undefined
): Promise<ProductResponseType> => {
  const response = await api.get(`/audiophile/product-details/${slug}`, {
    data: slug,
  });
  return response.data;
};

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

export async function getCartItems(token: string) {
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

export async function increaseQuantity(token: string, id: string) {
  const response = await api.post(
    '/audiophile/increase-quantity',
    { id },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}
export async function decreaseQuantity(token: string, id: string) {
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
