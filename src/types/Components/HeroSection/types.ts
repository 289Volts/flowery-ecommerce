import { THomeEntrySkeleton } from "@/types/Contentful/contentfulTypes";
import { EntryCollection } from "contentful";
import { StaticImageData } from "next/image";

export type THeroSectionProps = {
  res: EntryCollection<THomeEntrySkeleton, undefined>;
};

export type TImages = { [key: string]: StaticImageData }[];
