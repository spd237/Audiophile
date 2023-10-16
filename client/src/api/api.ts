import axios from 'axios';
import { CategoryType } from '../types';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

export const getHeadphones = async () => {
  return await api.get<CategoryType>('/headphones');
};
export const getSpeakers = async () => {
  return await api.get<CategoryType>('/speakers');
};
export const getEarphones = async () => {
  return await api.get<CategoryType>('/earphones');
};
