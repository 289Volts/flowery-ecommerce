import { THomeEntrySkeleton } from "@/types/Contentful/contentfulTypes";
import { EntryCollection } from "contentful";

export type THeroSectionProps = {
  res: EntryCollection<THomeEntrySkeleton, undefined>;
};
