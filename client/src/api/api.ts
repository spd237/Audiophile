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
  const response = await api.get('/headphones');
  return response.data;
};
export const getSpeakers = async (): Promise<CategoryType> => {
  const response = await api.get('/speakers');
  return response.data;
};
export const getEarphones = async (): Promise<CategoryType> => {
  const response = await api.get('/earphones');
  return response.data;
};

export const getProduct = async (
  slug: string | undefined
): Promise<ProductResponseType> => {
  const response = await api.get(`/product-details/${slug}`, {
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
