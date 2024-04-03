import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";
import TK from "../../../../public/meio.png";
import Image from "next/image";
import { SiHackaday } from "react-icons/si";

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="flex flex-col">
            <section className="flex">
              <h1>AppSec</h1>
              <SiHackaday />
            </section>
            <h2>
              Segurança de Aplicativos (AppSec): Protegendo Seu Negócio Online O
              Que É AppSec? AppSec é a prática de proteger aplicativos contra
              ameaças de segurança, garantindo que eles sejam resilientes a
              ataques maliciosos.
            </h2>
          </div>
        </div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  );
}
