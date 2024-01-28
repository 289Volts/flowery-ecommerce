type Category = {
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
};

export type THeroSection = {
  heroHeading: string;
  heroSubHeading: string;
  heroExtraText: string;
  heroImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  categories: Category[];
};

export type TAboutSection = {
  heading: string;
  paragraph: string;
};

type HomeContent = {
  heroSection: THeroSection;
  about: TAboutSection;
};

export type THomeQueryResult = HomeContent[];
