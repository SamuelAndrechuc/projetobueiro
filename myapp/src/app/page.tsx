import React from "react";
import ImageLogo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import ImageMeio from "../../public/meio.png";

const LandingPage: React.FC = () => {
  return (
    <div className="relative bg-black text-white min-h-screen pt-16">
      <div className="text-white text-center flex flex-col md:flex-row justify-center font-bold gap-8 text-xl">
        <Link className="" href={"#"}>
          <h2 className="hover:text-2xl hover:shadow-md duration-700 cursor-pointer font-ibmPlexMono">
            Quem somos
          </h2>
        </Link>
        <Link className="" href={"#"}>
          <h2 className="hover:text-2xl hover:shadow-md duration-700 cursor-pointer font-ibmPlexMono">
            Serviços
          </h2>
        </Link>
        <Link className="" href={"#"}>
          <h2 className="hover:text-2xl hover:shadow-md duration-700 cursor-pointer font-ibmPlexMono">
            Contato
          </h2>
        </Link>
      </div>
      <div className="absolute top-0 left-0 m-8">
        <Image
          className="rounded-lg w-24"
          src={ImageLogo}
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 mx-8">
        <div className="text-center md:text-left pr-9 p-9">
          <h1 className="text-4xl font-bold mb-4 font-ibmPlexMono">
          A segurança que você precisa, contra as <span style={{color:"red"}}>ameaças</span> que você não conhece.</h1>
          <p className="text-lg mb-8 font-ibmPlexMono">
          Garantindo a segurança dos seus dados, mesmo nos esgotos da internet.          
          </p>
          <button className="bg-red-600 hover:bg-red-800 hover:p-4 text-xl duration-500 text-white p-4 rounded-lg shadow-md shadow-red-600 font-ibmPlexMono">
            <Link href={"#email"}>Fale com nosso time</Link>
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="mt-12">
            <Image
              className="rounded-lg w-[30%]"
              src={ImageMeio}
              alt="ImagemMeio"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-32 p-5 text-lg w-[100%]" id="sobre">
        <h1 className="text-3xl font-bold font-ibmPlexMono">Conheça nossos serviços</h1>
        <br />
        <p className="text-xl font-bold font-ibmPlexMono">
        Seja qual for sua necessidade, nós temos a solução ideal.        </p>
        <div className="flex justify-around items-center p-5 mt-12">
         
          <div>
            <h1 className="w-64 text-xl font-bold font-ibmPlexMono">
              Nossos cases de sucesso incluem clientes de todo o Brasil, como a
              Paratodos em Xique-Xique - BA
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
