export type Product = {
  title: string;
  slug: {
    current: string;
  };
  disImage: {
    asset: {
      _ref: string;
    };
  };
  availableQty: number;
  price: number;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  desc: string;
  combination: {
    title: string;
    price: number;
    image: {
      asset: {
        _ref: string;
      };
    };
  }[];
};

export type TProductQueryResult = Product[];
