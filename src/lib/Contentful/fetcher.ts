import { HomeEntrySkeleton } from "@/types/Contentful/contentfulTypes";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY ?? "",
});
export const fetchContent = async (contentType: string) => {
  const res = await client.getEntries<HomeEntrySkeleton>({
    content_type: contentType,
  });
  return res;
};
