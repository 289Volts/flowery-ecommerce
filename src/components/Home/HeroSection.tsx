/* eslint-disable */
// "use client";
// import { useQuery } from "@tanstack/react-query";
import { THeroSectionProps } from "@/types/Components/HeroSection/types";
import { urlFor } from "@/utils/Sanity/imageBuilder";
import Image from "next/image";
import CardLink from "../shared/CardLink";

const HeroSection = async ({ data }: THeroSectionProps) => {
  console.log(data);
  // const textContent = await fetchContent("home");
  // const heroImage = await fetchAssets("33Y773KpU5oZKZeDKNS4E5");
  // const categoriesImg = await fetchAssets();
  // const textContent = useQuery({
  //   queryKey: ["textContent"],
  //   queryFn: async () => {
  //     const res = await fetchContent("home");
  //     return res;
  //   },
  // });

  // const heroImage = useQuery({
  //   queryKey: ["heroImage"],
  //   queryFn: async () => {
  //     const res = await fetchAssets("33Y773KpU5oZKZeDKNS4E5");
  //     return res;
  //   },
  // });
  // const categoriesImg = useQuery({
  //   queryKey: ["categoriesImage"],
  //   queryFn: async () => {
  //     const res = await fetchAssets();
  //     return res;
  //   },
  // });

  // if (textContent.isPending || heroImage.isPending || categoriesImg.isPending)
  //   return <p>Loading...</p>;

  // const categories = textContent.items[0].fields.categories;

  return (
    <section className="grid lg:grid-cols-[0.5fr_1fr] xl:grid-cols-2">
      <div
        // key={data.heading}
        className="w-fit px-4 py-10 sm:p-20 lg:p-10 xl:p-20 "
      >
        <div className="sm:pb-13 space-y-4 pb-6">
          <h1 className="text-mobileHeading1 sm:text-desktopHeading1">
            {data.heroHeading}
            <sup className="-top-[0.2rem] text-mobileHeading1 !font-normal sm:text-desktopHeading1">
              &reg;
            </sup>
          </h1>
          <p className="text-pretty text-mobileCaption !font-normal sm:text-desktopSubtitle">
            {data.heroSubHeading}
          </p>
        </div>
        <div className="grid grid-cols-[1fr_1px_1fr] gap-x-4 border-t border-t-black pt-4 sm:gap-x-6 sm:pt-6">
          {/* <Image
            src={`https:${heroImage.fields.file.url}`}
            width={heroImage.fields.file.details.image.width}
            height={heroImage.fields.file.details.image.height}
            alt=""
            className="w-full"
          /> */}
          <div className="h-full w-full bg-black" />
          <p className="text-pretty self-end text-xs sm:text-sm">
            {data.heroExtraText}
          </p>
        </div>
      </div>
      {/* {
        // textContent.isSuccess &&
        textContent.items.map(({ fields: { heroSection } }) => (
          <div
            key={data.heading}
            className="w-fit px-4 py-10 sm:p-20 lg:p-10 xl:p-20 "
          >
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
              <Image
                src={`https:${heroImage.fields.file.url}`}
                width={heroImage.fields.file.details.image.width}
                height={heroImage.fields.file.details.image.height}
                alt=""
                className="w-full"
              />
              <div className="h-full w-full bg-black" />
              <p className="text-pretty self-end text-xs sm:text-sm">
                {heroSection.extraText}
              </p>
            </div>
          </div>
        ))
      } */}
      <div className="border-y border-y-primary lg:border-l lg:border-l-primary">
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
            const imageOptions = urlFor(imageUrl);
            const url = imageOptions.url();
            // console.log(imageOptions.url());
            return (
              <div
                key={title}
                className={`grid grid-cols-2 ${i !== 0 ? "border-t-2 border-t-primary" : ""}`}
              >
                <Image
                  src={url}
                  alt=""
                  className={`h-full w-full object-cover ${i % 2 !== 0 ? "row-[1] col-[1] border-r border-r-primary" : "row-[1] col-[2] border-l border-l-primary"}`}
                  width={imageOptions.width(256).options.width}
                  height={imageOptions.height(256).options.height}
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
    // <p className="">Hello</p>
  );
};

export default HeroSection;

// /Home/HeroSection/Categories/Fresh Flowers/
