import freshFlowersSM from "@/public/assets/images/Home/HeroSection/Categories/Fresh Flowers/freshFlowerSM.png";
import heroImgDT from "@/public/assets/images/Home/HeroSection/heroImgDT.png";
import heroImgMD from "@/public/assets/images/Home/HeroSection/heroImgMD.png";
import heroImgSM from "@/public/assets/images/Home/HeroSection/heroImgSM.png";
// import driedFlowersSM from "@/public/assets/images/Home/HeroSection/Categories/Dried Flowers/driedFlowersSM.png";
// import livePlantSM from "@/public/assets/images/Home/HeroSection/Categories/Live Plant/livePlantSM.png";
// import aromaCandleSM from "@/public/assets/images/Home/HeroSection/Categories/Aroma CCandles/aromaCandleSM.png";
// import freshnerSM from "@/public/assets/images/Home/HeroSection/Categories/Freshners/freshnerSM.png";
import { THeroSectionProps } from "@/types/Components/HeroSection/types";
import Image from "next/image";
import CardLink from "../shared/CardLink";

const HeroSection = ({ res }: THeroSectionProps) => {
  const categories = res.items[0].fields.categories;
  console.log(categories);
  return (
    <section className="mx-auto grid w-[90%] py-10 sm:w-auto sm:p-20 lg:grid-cols-[0.5fr_1fr] xl:grid-cols-2">
      {res.items.map(({ fields: { heroSection } }) => (
        <>
          <div key={heroSection.heading} className="w-fit">
            <div className="sm:pb-13 space-y-4 pb-6">
              <h1 className="text-mobileHeading1 sm:text-desktopHeading1">
                {heroSection.heading}
              </h1>
              <p className="text-pretty text-mobileCaption !font-normal sm:text-desktopSubtitle">
                {heroSection.subHeading}
              </p>
            </div>
            <div className="grid grid-cols-[1fr_1px_1fr] gap-x-4 border-t border-t-black pt-4 sm:gap-x-6 sm:pt-6">
              <Image src={heroImgSM} alt="" className="sm:hidden" />
              <Image
                src={heroImgMD}
                alt=""
                className="hidden sm:block lg:hidden"
              />
              <Image src={heroImgDT} alt="" className="hidden lg:block" />
              <div className="h-full w-full bg-black" />
              <p className="text-pretty self-end text-xs sm:text-sm">
                {heroSection.extraText}
              </p>
            </div>
          </div>
        </>
      ))}
      <div className="lg:border-l lg:border-l-primary">
        {categories.map(({ name, slug }) => (
          <div key={name} className="">
            <CardLink textContent={name} href={slug} linkText="Shop now" />
            <Image src={freshFlowersSM} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

// /Home/HeroSection/Categories/Fresh Flowers/
