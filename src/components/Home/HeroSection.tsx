/* eslint-disable */
// "use client";
// import { useQuery } from "@tanstack/react-query";

import { THeroSectionProps } from "@/types/Components/Views/views.types";
import { urlFor } from "@/utils/Sanity/imageBuilder";
import console from "console";
import dynamic from "next/dynamic";
import CardLink from "../shared/CardLink";
import { ImageSkeleton } from "../shared/ImageSkeleton";

const DynamicImage = dynamic(() => import("../shared/LazyImage"), {
  ssr: false,
  loading: () => (
    <ImageSkeleton className="md:min-h-[279px] md:min-w-[279.5px] lg:min-h-[455px] lg:min-w-[455.5px] xl:min-h-[231.4px] xl:min-w-[231.4px] 2xl:min-h-[255.5px] 2xl:min-w-[255.5px]" />
  ),
});

const HeroSection = ({ data }: THeroSectionProps) => {
  console.log(data);
  const heroImgOpt = urlFor(data.heroImage);
  const heroImg = heroImgOpt.url();

  return (
    <section className="grid xl:grid-cols-2">
      <div className="lg:p10 w-fit px-4 py-10 sm:p-20 lg:p-8 xl:p-20">
        <div className="space-y-4 pb-6 sm:pb-13">
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
          <DynamicImage
            src={heroImg}
            width={heroImgOpt.width(256).options.width!}
            height={heroImgOpt.height(256).options.height!}
          />
          <div className="h-full w-full bg-black" />
          <p className="text-pretty self-end text-xs sm:text-sm">
            {data.heroExtraText}
          </p>
        </div>
      </div>
      <div className="border-t border-t-primary lg:grid xl:border-y-0 xl:border-l xl:border-l-primary">
        {[...data.categories].map(
          (
            {
              title,
              slug: { current },
              homeImage: {
                asset: { _ref: imageUrl },
              },
            },
            i,
          ) => {
            const categoryImgOpt = urlFor(imageUrl);
            const categoryImg = categoryImgOpt.url();
            return (
              <div
                key={i}
                className={`xl:min-h-360px] grid min-h-[200px] grid-cols-2 md:min-h-[384px] ${i !== 0 ? "border-t-2 border-t-primary" : ""}`}
              >
                <div
                  className={`group min-h-[200px] min-w-[120px] overflow-hidden ${i % 2 !== 0 ? "col-[1] row-[1] border-r-2 border-r-primary" : "col-[2] row-[1] border-l border-l-primary"}`}
                >
                  <DynamicImage
                    src={categoryImg}
                    className={`h-full w-full object-cover`}
                    width={categoryImgOpt.width(360).options.width!}
                    height={categoryImgOpt.height(360).options.height!}
                    priority
                  />
                </div>
                <CardLink
                  key={title}
                  textContent={title}
                  href={`categories/${current}`}
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
