import * as React from "react";
import ratao from "../../../../public/meio.png";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent className="mb-32">
        <CarouselItem className="basis-2/3">
          <Image src={ratao} alt="ratao" />
        </CarouselItem>
        <CarouselItem className="basis-2/3">
          <Image src={ratao} alt="ratao" />
        </CarouselItem>
        <CarouselItem className="basis-2/3">
          <Image src={ratao} alt="ratao" />
        </CarouselItem>
        <CarouselItem className="basis-2/3">
          <Image src={ratao} alt="ratao" />
        </CarouselItem>
        <CarouselItem className="basis-2/3">
          <Image src={ratao} alt="ratao" />
        </CarouselItem>
        <CarouselItem className="basis-2/3">
          <Image src={ratao} alt="ratao" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
