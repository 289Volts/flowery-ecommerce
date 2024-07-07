import { TWhyUsSectionProps } from "@/types/Components/Views/home.views.types";
import SectionHeading from "../shared/SectionHeading";

const WhyUs = ({ data }: TWhyUsSectionProps) => {
  // console.log(data);
  return (
    <section className="grid border-b border-b-primary text-primary lg:grid-cols-2">
      <SectionHeading heading="why us" />
      <div className="lg:border-l lg:border-l-primary">
        {data.map(({ heading, paragraph }, i) => (
          <div
            key={heading}
            className={`space-y-4 border-t border-t-primary px-4 py-10 sm:p-20 lg:p-10 xl:p-20 ${i === 0 ? "lg:border-t-0" : ""}`}
          >
            <h3 className="mb-4 text-mobileHeading3 sm:text-desktopHeading3">
              {heading}
            </h3>
            <p className="text-pretty text-mobileBody">{paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
