import heroImgMD from "@/public/assets/images/Home/HeroSection/heroImgMD.png";
import heroImgSM from "@/public/assets/images/Home/HeroSection/heroImgSM.png";
import { THeroSectionProps } from "@/types/Components/HeroSection/types";
import Image from "next/image";

const HeroSection = ({ res }: THeroSectionProps) => {
  return (
    <section className="mx-auto w-[90%] divide-y divide-black py-10 sm:w-[80%] sm:py-20">
      {res.items.map(({ fields: { heroSection } }) => (
        <>
          <div className="sm:pb-13 space-y-4 pb-6">
            <h1 className="text-mobileHeading1 sm:text-desktopHeading1">
              {heroSection.heading}
            </h1>
            <p className="text-pretty text-mobileCaption !font-normal sm:text-desktopSubtitle">
              {heroSection.subHeading}
            </p>
          </div>
          <div className="grid grid-cols-[1fr_1px_1fr] gap-x-4 pt-4 sm:gap-x-6 sm:pt-6">
            <Image src={heroImgSM} alt="" className="sm:hidden" />
            <Image src={heroImgMD} alt="" className="hidden sm:block" />
            <div className="h-full w-full bg-black" />
            <p className="text-pretty self-end text-xs sm:text-sm">
              {heroSection.extraText}
            </p>
          </div>
        </>
      ))}
    </section>
  );
};

export default HeroSection;
