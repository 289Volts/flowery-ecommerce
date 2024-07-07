import { Product } from "./product.sanity.types";

type Categories = {
  title: string;
  slug: {
    current: string;
  };
  homeImage: {
    asset: {
      _ref: string;
    };
  };
  posterImage: {
    asset: {
      _ref: string;
    };
  };
  products: Product[];
};

export type TCategoriesQueryResult = Categories[];
