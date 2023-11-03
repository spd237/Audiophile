export interface CategoryType {
  data: ProductType[];
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
  includes: InTheBox[];
  gallery: Gallery;
  others: Others[];
}

export interface Gallery {
  first: ImagesType;
  second: ImagesType;
  third: ImagesType;
}

export interface InTheBox {
  quantity: number;
  item: string;
}

export interface ImagesType {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Others {
  slug: string;
  name: string;
  image: ImagesType;
}

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}
