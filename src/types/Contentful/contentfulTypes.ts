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

export type TAssetsFile = {
  fileName: string;
  contentType: string;
  details: {
    image: {
      width: number;
      height: number;
    };
    size: number;
  };
  url: string;
};

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

// export type TAssetsEntrySkeleton = {
//   fields: {
//     file: AssetCollection;
//   };
// };

// export type TAssetsEntrySkeleton = {
//   fields: {
//     title: string;
//     file: {
//       fileName: "quwowooybuqbl6ntboz3.jpg";
//       contentType: "image/jpg";
//       details: {
//         image: {
//           width: 600;
//           height: 446;
//         };
//         size: 27187;
//       };
//       url: "//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg";
//     };
//   };
// };
