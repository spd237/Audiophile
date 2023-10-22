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

export interface CommonPropsType {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartRef: React.RefObject<HTMLDivElement>;
  navRef: React.RefObject<HTMLDivElement>;
  buttonCartRef: React.RefObject<HTMLButtonElement>;
  buttonNavRef: React.RefObject<HTMLButtonElement>;
}
