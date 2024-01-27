import { THeroSection } from "@/types/Sanity/sanity.type";
import { StaticImageData } from "next/image";

export type THeroSectionProps = {
  data: THeroSection;
};

export type TImages = { [key: string]: StaticImageData }[];
