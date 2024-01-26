import { THomeEntrySkeleton } from "@/types/Contentful/contentfulTypes";
import { Asset, AssetCollection, createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY ?? "",
});
export const fetchContent = async (contentType: string) => {
  const res = await client.getEntries<THomeEntrySkeleton>({
    content_type: contentType,
  });
  return res;
};
export const fetchAssets = async (assetId: string = "") => {
  let res;
  if (assetId) {
    res = (await client.getAsset(assetId)) as Asset;
  } else {
    res = (await client.getAssets()) as AssetCollection;
  }
  return res;
};
