import { TAboutSectionProps } from "@/types/Components/Views/home.views.types";
import Action from "../shared/Action";
import SectionHeading from "../shared/SectionHeading";

const AboutSection = ({ data }: TAboutSectionProps) => {
  return (
    <section className="grid border-y border-y-primary text-primary lg:grid-cols-2">
      <SectionHeading heading="about us" />
      <div className="space-y-16 border-t border-t-primary px-4 py-10 sm:p-20 lg:border-l lg:border-t-0 lg:border-l-primary lg:p-10 xl:p-20">
        <div className="">
          <h4 className="mb-6 text-mobileOverline uppercase">our story</h4>
          <h3 className="mb-4 text-mobileHeading3 sm:text-desktopHeading3">
            {data.heading}
          </h3>
          <p className="text-pretty text-mobileBody">{data.paragraph}</p>
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
