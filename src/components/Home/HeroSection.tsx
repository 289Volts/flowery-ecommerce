/* eslint-disable */
// "use client";
// import { useQuery } from "@tanstack/react-query";
import { THeroSectionProps } from "@/types/Components/HeroSection/hero.types";
import { urlFor } from "@/utils/Sanity/imageBuilder";
import Image from "next/image";
import CardLink from "../shared/CardLink";

const HeroSection = async ({ data }: THeroSectionProps) => {
  const heroImgOpt = urlFor(data.heroImage);
  const heroImg = heroImgOpt.url();

  return (
    <section className="grid lg:grid-cols-[0.5fr_1fr] xl:grid-cols-2 lg:border-b-2 lg:border-b-primary">
      <div className="w-fit px-4 py-10 sm:p-20 lg:p-10 xl:p-20 ">
        <div className="sm:pb-13 space-y-4 pb-6">
          <h1 className="text-mobileHeading1 sm:text-desktopHeading1">
            {data.heroHeading}
            <sup className="-top-[0.2rem] -z-[1] text-mobileHeading1 !font-normal sm:text-desktopHeading1">
              &reg;
            </sup>
          </h1>
          <p className="text-pretty text-mobileCaption !font-normal sm:text-desktopSubtitle">
            {data.heroSubHeading}
          </p>
        </div>
        <div className="grid grid-cols-[1fr_1px_1fr] gap-x-4 border-t border-t-black pt-4 sm:gap-x-6 sm:pt-6">
          <Image
            src={heroImg}
            width={heroImgOpt.width(256).options.width}
            height={heroImgOpt.height(256).options.height}
            alt=""
            className="w-full"
          />
          <div className="h-full w-full bg-black" />
          <p className="text-pretty self-end text-xs sm:text-sm">
            {data.heroExtraText}
          </p>
        </div>
      </div>
      <div className="border-y-2 border-y-primary lg:border-l lg:border-l-primary lg:border-y-0">
        {data.categories.map(
          (
            {
              title,
              slug: { current },
              image: {
                asset: { _ref: imageUrl },
              },
            },
            i,
          ) => {
            const categoryImgOpt = urlFor(imageUrl);
            const categoryImg = categoryImgOpt.url();
            return (
              <div
                key={title}
                className={`grid grid-cols-2 ${i !== 0 ? "border-t-2 border-t-primary" : ""}`}
              >
                <Image
                  src={categoryImg}
                  alt=""
                  className={`h-full w-full object-cover ${i % 2 !== 0 ? "row-[1] col-[1] border-r-2 border-r-primary" : "row-[1] col-[2] border-l border-l-primary"}`}
                  width={categoryImgOpt.width(360).options.width}
                  height={categoryImgOpt.height(360).options.height}
                  priority={i === 0}
                />
                <CardLink
                  key={title}
                  textContent={title}
                  href={current}
                  linkText="Shop now"
                />
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default HeroSection;
