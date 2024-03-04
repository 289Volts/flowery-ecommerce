// import EmblaCarousel, { EmblaPluginType } from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ReactNode, useEffect, useState } from "react";
import Action from "../shared/Action";

type TCustomCarouselProps = {
  children: ReactNode;
  containerClass?: string;
  //   showArrows?: boolean;
};
const CustomCarousel = ({
  children,
  containerClass,
  //   showArrows,
}: TCustomCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel setApi={setApi} className={containerClass}>
      <CarouselContent>{children}</CarouselContent>
      {/* {showArrows && (
        <>
         
        </>
      )} */}
      <CarouselPrevious />
      <CarouselNext />
      <div className="flex gap-1 items-center justify-center mt-8">
        {Array.from({ length: count }).map((curr, index) => (
          <Action
            buttonProps={{
              onClick: () => {
                api?.scrollTo(index);
              },
            }}
            className={`block aspect-square w-[6px] rounded-full ${index + 1 === current ? " bg-primary" : "bg-gray-light"}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
