import { TWhyUsSectionProps } from "@/types/Components/Views/views.types";
import SectionHeading from "../shared/SectionHeading";

const WhyUs = ({ data }: TWhyUsSectionProps) => {
  // console.log(data);
  return (
    <section className="grid lg:grid-cols-2 text-primary border-b border-b-primary">
      <SectionHeading heading="why us" />
      <div className="lg:border-l-primary lg:border-l">
        {data.map(({ heading, paragraph }, i) => (
          <div
            key={heading}
            className={`py-10 px-4 sm:p-20 lg:p-10 xl:p-20 space-y-4 border-t border-t-primary ${i === 0 ? "lg:border-t-0" : ""}`}
          >
            <h3 className="text-mobileHeading3 mb-4 sm:text-desktopHeading3">
              {heading}
            </h3>
            <p className="text-mobileBody text-pretty">{paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
