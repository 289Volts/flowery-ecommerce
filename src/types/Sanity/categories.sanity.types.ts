type Categories = {
  title: string;
  slug: {
    current: string;
  };
  homeImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  posterImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  products: {
    title: string;
    slug: {
      current: string;
    };
    image: {
      asset: {
        _ref: string;
        url: string;
      };
    };
  }[];
};

export type TCategoriesQueryResult = Categories[];
