import { THomeEntrySkeleton } from "@/types/Contentful/contentfulTypes";
import { AssetCollection, Entry } from "contentful";
import { StaticImageData } from "next/image";

export type THeroSectionProps = {
  textContent: Entry<THomeEntrySkeleton, undefined>[];
  assets: AssetCollection<undefined>;
};

export type TImages = { [key: string]: StaticImageData }[];
