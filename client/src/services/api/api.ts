import axios from 'axios';
import { CartItem, ProductType } from '../../types';

const API_URL = 'https://audiophile-api-2jdh.onrender.com';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(function (config) {
  const token = JSON.parse(
    localStorage.getItem('sb-gfgywzotuybpcpuqczfi-auth-token') || 'null'
  )?.access_token;
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
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

export async function getCartItems(): Promise<CartItem[]> {
  const response = await api.get(`/audiophile/cart-items`);
  return response.data;
}

export async function addToCart(
  name: string | undefined,
  quantity: number,
  price: number | undefined
) {
  const response = await api.post('/audiophile/add-item', {
    name,
    quantity,
    price,
  });
  return response.data;
}

export async function increaseQuantity(id: string): Promise<CartItem> {
  const response = await api.post('/audiophile/increase-quantity', { id });
  return response.data;
}
export async function decreaseQuantity(id: string): Promise<CartItem> {
  const response = await api.post('/audiophile/decrease-quantity', { id });
  return response.data;
}

export async function removeAllItems() {
  const response = await api.post('/audiophile/remove-all');
  return response.data;
}
