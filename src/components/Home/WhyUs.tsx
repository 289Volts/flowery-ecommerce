import { TWhyUsSectionProps } from "@/types/Components/Views/views.types";
import SectionHeading from "../shared/SectionHeading";

const WhyUs = ({ data }: TWhyUsSectionProps) => {
  // console.log(data);
  return (
    <section className="grid lg:grid-cols-2 text-primary">
      <SectionHeading heading="why us" />
      <div className=""></div>
    </section>
  );
};

export default WhyUs;
