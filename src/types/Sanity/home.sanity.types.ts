import { Product } from "./product.sanity.types";

type Category = {
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
  products: Product[];
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
export type TServices = Array<
  THeadingAndParagraph & {
    image: {
      asset: {
        _ref: string;
        url: string;
      };
    };
  }
>;

export type TTestimonialsSection = {
  paragraph: string;
  author: string;
}[];

type HomeContent = {
  heroSection: THeroSection;
  about: TAboutSection;
  whyUs: TWhyUs;
  services: TServices;
  testimonials: TTestimonialsSection;
};

export type THomeQueryResult = HomeContent[];
