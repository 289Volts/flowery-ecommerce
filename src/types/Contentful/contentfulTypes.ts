import { EntryFieldTypes } from "contentful";

export type HeroSection = {
  heading: string;
  subHeading: string;
  extraText: string;
};

export type HeadingAndParagraph = {
  heading: string;
  paragraph: string;
};

export type HeadingAndAuthor = {
  heading: string;
  author: string;
};

export type HomeEntrySkeleton = {
  contentTypeId: string;
  fields: {
    heroSection: EntryFieldTypes.Object<HeroSection>;
    categories: EntryFieldTypes.Object<HeadingAndParagraph>;
    aboutUs: EntryFieldTypes.Object<HeadingAndParagraph>;
    whyChooseUs: EntryFieldTypes.Object<HeadingAndParagraph>;
    subscriptions: EntryFieldTypes.Object<HeadingAndParagraph>;
    testimonials: EntryFieldTypes.Object<HeadingAndAuthor>;
  };
};
