export interface CategoryType {
  products: ProductType[];
}
export interface ProductType {
  id: number;
  slug: string;
  name: string;
  image: ImagesType;
  category: string;
  categoryImage: ImagesType;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {};
  gallery: {};
  others: {};
}

export interface ImagesType {
  mobile: string;
  tablet: string;
  desktop: string;
}
