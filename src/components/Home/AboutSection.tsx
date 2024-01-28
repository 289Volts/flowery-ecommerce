import { TAboutSectionProps } from "@/types/Components/AboutSection/about.types";
import Action from "../ui/Action";

const AboutSection = ({ data }: TAboutSectionProps) => {
  return (
    <section className="grid sm:grid-cols-2">
      <div className="py-10 px-4">
        <h2 className="text-mobileHeading2 uppercase">about us</h2>
      </div>
      <div className="py-10 px-4 space-y-16">
        <div className="border-t border-t-primary">
          <h4 className="uppercase text-mobileOverline mb-6">our story</h4>
          <h3 className="text-mobileHeading3 mb-4">{data.heading}</h3>
          <p className="text-mobileBody text-pretty">{data.paragraph}</p>
        </div>
        <Action variant="secondary" isLink className="uppercase" href="/about">
          learn more
        </Action>
      </div>
    </section>
  );
};

export default AboutSection;
