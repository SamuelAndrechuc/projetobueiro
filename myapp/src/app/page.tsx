"use client";
import React, { useState } from "react";
import Image from "next/image";
import StyledLink from "../../public/components/StyledLink";
import ImageLogo from "../../public/logo.png";
import ImageMeio from "../../public/meio.png";
import BandeiraBRPretaVermelha from "../../public/bandeira.png";
import TextHackedEffectComponent from "react-text-hacked";
import { GlitchText } from "glitch-text";
import { CarouselSize } from "../app/components/carousel/index";

const Header = () => (
  <header className="w-full flex justify-between items-center px-8">
    <Image
      src={ImageLogo}
      alt="Logo da empresa"
      width={60}
      height={60}
      className="rounded-lg"
    />
    <nav className="text-xl font-bold font-ibmPlexMono">
      <ul className="flex gap-8">
        <li>
          <StyledLink href="#">Quem somos</StyledLink>
        </li>
        <li>
          <StyledLink href="#">Serviços</StyledLink>
        </li>
        <li>
          <StyledLink href="#">Contato</StyledLink>
        </li>
      </ul>
    </nav>
    <Image
      src={BandeiraBRPretaVermelha}
      alt="Bandeira do Brasil Preta e Vermelha"
      width={50}
      height={30}
    />
  </header>
);

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState(0);

  const toggleHover = (
    hovered: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsHovered(hovered);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center pt-4 lg:pt-16">
      <Header />
      <main className="text-center mt-16 md:mt-24 lg:mt-32 max-w-4xl px-4">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 font-ibmPlexMono">
          A segurança que você precisa, contra as{" "}
          <span className="text-red-500 glitch" data-text="ameaças">
            ameaças
          </span>{" "}
          que você não conhece.
        </h1>
        <p className="text-lg lg:text-2xl mb-8 font-ibmPlexMono mt-20">
          Garantindo a segurança dos seus dados, mesmo nos esgotos da internet.
        </p>
        <button
          className="button"
          onMouseEnter={() => toggleHover(true)}
          onMouseLeave={() => toggleHover(false)}
        >
          <TextHackedEffectComponent
            key={key}
            defaultText="Fale com nosso time"
            startOnHover={isHovered}
          />
        </button>
      </main>
      <Image
        src={ImageMeio}
        alt="ImagemRatoPC"
        width={450}
        height={450}
        className="rounded-lg my-12 md:my-24"
      />
      <section className="text-center text-lg lg:text-xl w-full px-4 lg:px-0 mt-12 lg:mt-10">
        <h2 className="text-2xl lg:text-4xl font-bold font-ibmPlexMono">
          Conheça nossos serviços!
        </h2>
        <p className="mt-2 lg:mt-4 font-ibmPlexMono">
          Seja qual for sua necessidade, nós temos a solução ideal.
        </p>
      </section>
      <CarouselSize />
      <style jsx>{`
        .button {
          background-color: #ff0000;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          color: #ffffff;
          font-size: 16px;
          display: inline-block; // Adicionado para melhorar a apresentação
        }

        .button:hover {
          background-color: #ff3333;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
