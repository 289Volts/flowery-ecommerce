import { CarouselItem } from "@/components/ui/carousel";
import google from "@/public/assets/icons/google.svg";
import { TTestimonialsSectionProps } from "@/types/Components/Views/home.views.types";
import Image from "next/image";
import CustomCarousel from "../Blocks/Carousel";
import Action from "../shared/Action";

const Testimonials = ({ data }: TTestimonialsSectionProps) => {
  return (
    <section className="px-11 py-10 text-center md:p-20">
      <div className="">
        <Image src={google as string} alt="" className="mx-auto" />
        <span className="text-mobileOverline uppercase">reviews</span>
      </div>
      <h2 className="mb-4 mt-6 text-mobileHeading2">Our Clients say</h2>
      <div className="">
        <CustomCarousel containerClass="max-w-[1180px] mx-auto">
          {data.map((item, index) => (
            <CarouselItem
              className="flex flex-col space-y-4 text-center"
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
        className="mt-16 w-full sm:mx-auto sm:w-fit"
        href="/"
      >
        read reviews
      </Action>
    </section>
  );
};

export default Testimonials;
