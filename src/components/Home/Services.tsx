import { TServicesSectionProps } from "@/types/Components/Views/home.views.types";
import { urlFor } from "@/utils/Sanity/imageBuilder";
import Image from "next/image";
import Action from "../shared/Action";
import SectionHeading from "../shared/SectionHeading";

const Services = ({ data }: TServicesSectionProps) => {
  return (
    <section className="md:text-center">
      <SectionHeading heading="our service" />
      <div className="border-t border-t-primary text-left ">
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
              <div
                className={`relative lg:grid ${i === 0 ? "lg:grid-cols-2" : "xl:min-h-[721px]"}`}
                key={heading}
              >
                {i === 1 && (
                  <div className="absolute inset-0 z-[-1] bg-black/40" />
                )}
                <Image
                  src={"" + serviceImg}
                  className={`h-full w-full object-cover object-top md:max-h-[500px] lg:max-h-[721px] ${i === 1 ? "absolute inset-0 z-[-2] object-cover" : ""}`}
                  alt=""
                  width={serviceImgOpt.width(360).options.width}
                  height={serviceImgOpt.height(360).options.height}
                />
                <div
                  className={`border-t border-t-primary px-4 py-10 text-center sm:p-20 lg:flex lg:flex-col lg:items-center lg:justify-center ${i === 1 ? "py-[3.2rem] text-white lg:mx-auto lg:w-[80%] xl:w-[58%]" : ""}`}
                >
                  <h4 className="mb-6 text-mobileOverline uppercase sm:text-desktopOverline">
                    service
                  </h4>
                  <div className="mb-16 space-y-4">
                    <h2 className="text-mobileHeading2 sm:text-desktopHeading2">
                      {heading}
                    </h2>
                    <p className="sm:text-desktopSubtitle">{paragraph}</p>
                  </div>
                  <Action
                    isLink
                    href="/subscriptions"
                    variant={i === 1 ? "tertiary" : "secondary"}
                    className="mx-auto uppercase md:w-fit"
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
