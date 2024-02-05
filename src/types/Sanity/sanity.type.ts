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

type THeadingAndParagraph = {
  heading: string;
  paragraph: string;
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

export type TAboutSection = THeadingAndParagraph;
export type TWhyUs = THeadingAndParagraph[];

type HomeContent = {
  heroSection: THeroSection;
  about: TAboutSection;
  whyUs: TWhyUs;
};

export type THomeQueryResult = HomeContent[];
