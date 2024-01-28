import { TAboutSectionProps } from "@/types/Components/AboutSection/about.types";
import Action from "../ui/Action";

const AboutSection = ({ data }: TAboutSectionProps) => {
  return (
    <section className="grid lg:grid-cols-2 text-primary">
      <div className="py-10 px-4 sm:p-20">
        <h2 className="text-mobileHeading2 uppercase sm:text-desktopHeading2">
          about us
        </h2>
      </div>
      <div className="py-10 px-4 sm:p-20 space-y-16 border-t border-t-primary">
        <div className="">
          <h4 className="uppercase text-mobileOverline mb-6">our story</h4>
          <h3 className="text-mobileHeading3 mb-4 sm:text-desktopHeading3">
            {data.heading}
          </h3>
          <p className="text-mobileBody text-pretty">{data.paragraph}</p>
        </div>
        <Action
          variant="secondary"
          isLink
          className="uppercase sm:w-fit"
          href="/about"
        >
          learn more
        </Action>
      </div>
    </section>
  );
};

export default AboutSection;
