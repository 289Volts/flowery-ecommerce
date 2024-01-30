import { TAboutSectionProps } from "@/types/Components/Views/views.types";
import SectionHeading from "../shared/SectionHeading";
import Action from "../ui/Action";

const AboutSection = ({ data }: TAboutSectionProps) => {
  return (
    <section className="grid lg:grid-cols-2 text-primary lg:border-y-2 lg:border-y-primary">
      <SectionHeading heading="about us" />
      <div className="py-10 px-4 sm:p-20 lg:p-10 xl:p-20 space-y-16 border-t border-t-primary lg:border-t-0 lg:border-l-primary lg:border-l">
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
