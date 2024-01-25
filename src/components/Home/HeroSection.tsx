"use client";
import { mobileImages } from "@/lib/Data/CategoriesImages/data";
import { heroTextContentImages } from "@/lib/Data/HeroTextContent/data";
import { THeroSectionProps } from "@/types/Components/HeroSection/types";
import Image from "next/image";
import CardLink from "../shared/CardLink";

const HeroSection = ({ res }: THeroSectionProps) => {
  const categories = res.items[0].fields.categories;
  console.log(categories);
  return (
    <section className="grid lg:grid-cols-[0.5fr_1fr] xl:grid-cols-2">
      {res.items.map(({ fields: { heroSection } }) => (
        <div key={heroSection.heading} className="w-fit px-4 py-10 sm:p-20">
          <div className="sm:pb-13 space-y-4 pb-6">
            <h1 className="text-mobileHeading1 sm:text-desktopHeading1">
              {heroSection.heading}
              <sup className="-top-[0.2rem] text-mobileHeading1 !font-normal sm:text-desktopHeading1">
                &reg;
              </sup>
            </h1>
            <p className="text-pretty text-mobileCaption !font-normal sm:text-desktopSubtitle">
              {heroSection.subHeading}
            </p>
          </div>
          <div className="grid grid-cols-[1fr_1px_1fr] gap-x-4 border-t border-t-black pt-4 sm:gap-x-6 sm:pt-6">
            {heroTextContentImages.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt=""
                className={`w-full ${i === 0 ? "sm:hidden" : i === 1 ? "hidden sm:block lg:hidden" : "hidden lg:block"}`}
              />
            ))}
            <div className="h-full w-full bg-black" />
            <p className="text-pretty self-end text-xs sm:text-sm">
              {heroSection.extraText}
            </p>
          </div>
        </div>
      ))}
      <div className="border-y border-y-primary lg:border-l lg:border-l-primary">
        {categories.map(({ name, slug }, i) => (
          <div
            key={name}
            className={`grid grid-cols-2 ${i !== 0 ? "border-t-2 border-t-primary" : ""}`}
          >
            <CardLink textContent={name} href={slug} linkText="Shop now" />
            <Image
              src={mobileImages[i][name]}
              alt=""
              className={`${i % 2 !== 0 ? "row-[1] border-r border-r-primary" : ""} w-full`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

// /Home/HeroSection/Categories/Fresh Flowers/
