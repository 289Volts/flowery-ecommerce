import { EntryFieldTypes } from "contentful";

export type THeroSection = {
  heading: string;
  subHeading: string;
  extraText: string;
};

export type THeadingAndParagraph = {
  heading: string;
  paragraph: string;
};

export type THeadingAndAuthor = {
  heading: string;
  author: string;
};

export type TNameAndSlug = {
  name: string;
  slug: string;
}[];

export type THomeEntrySkeleton = {
  contentTypeId: string;
  fields: {
    heroSection: EntryFieldTypes.Object<THeroSection>;
    categories: EntryFieldTypes.Object<TNameAndSlug>;
    aboutUs: EntryFieldTypes.Object<THeadingAndParagraph>;
    whyChooseUs: EntryFieldTypes.Object<THeadingAndParagraph>;
    subscriptions: EntryFieldTypes.Object<THeadingAndParagraph>;
    testimonials: EntryFieldTypes.Object<THeadingAndAuthor>;
  };
};
