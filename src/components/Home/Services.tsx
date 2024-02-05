import { TServicesSectionProps } from "@/types/Components/Views/views.types";
import { urlFor } from "@/utils/Sanity/imageBuilder";
import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import Action from "../ui/Action";

const Services = ({ data }: TServicesSectionProps) => {
  //  const serviceImgOpt = urlFor(data.heroImage);
  //  const serviceImg = heroImgOpt.url();
  // console.log();
  return (
    <section className="">
      <SectionHeading heading="our service" />
      <div className="border-t border-t-primary">
        {data.map(
          (
            {
              heading,
              image: {
                asset: { _ref: imageUrl },
              },
              paragraph,
            },
            i,
          ) => {
            const serviceImgOpt = urlFor(imageUrl);
            const serviceImg = serviceImgOpt.url();
            return (
              <div className="relative" key={heading}>
                {i === 1 && (
                  <div className="absolute inset-0 bg-black/40 z-[-1]" />
                )}
                <Image
                  src={"" + serviceImg}
                  className={`w-full h-full ${i === 1 ? "absolute inset-0 object-cover z-[-2]" : ""}`}
                  alt=""
                  width={serviceImgOpt.width(360).options.width}
                  height={serviceImgOpt.height(360).options.height}
                />
                <div
                  className={`text-center py-10 sm:p-20 px-4 border-t border-t-primary ${i === 1 ? "text-white py-[3.2rem]" : ""}`}
                >
                  <h4 className="text-mobileOverline mb-6 sm:text-desktopOverline uppercase">
                    service
                  </h4>
                  <div className="space-y-4 mb-16">
                    <h2 className="text-mobileHeading2 sm:text-desktopHeading2">
                      {heading}
                    </h2>
                    <p className="sm:text-desktopSubtitle">{paragraph}</p>
                  </div>
                  <Action
                    isLink
                    href="/subscriptions"
                    variant={i === 1 ? "tertiary" : "secondary"}
                    className="uppercase"
                  >
                    subscribe now
                  </Action>
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Services;
