import { CarouselItem } from "@/components/ui/carousel";
import google from "@/public/assets/icons/google.svg";
import { TTestimonialsSectionProps } from "@/types/Components/Views/views.types";
import Image from "next/image";
import CustomCarousel from "../Blocks/Carousel";
import Action from "../shared/Action";

const Testimonials = ({ data }: TTestimonialsSectionProps) => {
  return (
    <section className="text-center py-10 px-11 md:p-20">
      <div className="">
        <Image src={google as string} alt="" className="mx-auto" />
        <span className="uppercase text-mobileOverline">reviews</span>
      </div>
      <h2 className="text-mobileHeading2 mt-6 mb-4">Our Clients say</h2>
      <div className="">
        <CustomCarousel containerClass="max-w-[1180px] mx-auto">
          {data.map((item, index) => (
            <CarouselItem
              className="space-y-4 text-center flex flex-col"
              key={index}
            >
              <q className="text-xl italic">{item.paragraph}</q>
              <span className="">-&nbsp;{item.author}</span>
            </CarouselItem>
          ))}
        </CustomCarousel>
      </div>
      <Action
        variant="secondary"
        className="w-full mt-16 sm:w-fit sm:mx-auto"
        href="/"
      >
        read reviews
      </Action>
    </section>
  );
};

export default Testimonials;
