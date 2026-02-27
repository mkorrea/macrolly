import { PageHead } from "@/components/page-head";
// import HeroBg from "@/assets/hero-bg.png";
import { HeroSection } from "./hero-section";

import IngredientsIcon from "@/assets/ingredients-icon.svg";
import MenuIcon from "@/assets/menu-icon.svg";
import WeigthIcon from "@/assets/weigth-icon.svg";
import TestImage from "@/assets/image 9.png";
import { FeaturesCard } from "./features-card";

export function Home() {
  return (
    <>
      <PageHead title="Início" />

      <div className="relative flex flex-col items-center">
        {/* <img
          src={HeroBg}
          className="h-165 w-full object-cover object-bottom  absolute left-0 z-0 rounded-t-2xl -mt-20 
          sm:h-223
          xl:h-260"
        /> */}

        <HeroSection />

        <section className="-mt-25 px-2 flex flex-col items-center gap-y-10 w-full max-w-350 z-10">
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="text-subtitle font-semibold text-center text-2xl md:text-3xl xl:text-4xl">
              O que você pode fazer no Macrolly
            </h1>
            <p className="text-text text-center md:text-lg xl:text-xl">
              Veja como é fácil usar o Macrolly:
            </p>
          </div>

          <div className="flex flex-col gap-y-4 gap-x-6 xl:gap-x-10 lg:flex-row">
            <FeaturesCard 
              icon={IngredientsIcon} 
              title="Adicione ingredientes"
              description="Cadastre alimentos e informe as quantidades e macronutrientes."
              image={TestImage}
            />
            <FeaturesCard 
              icon={WeigthIcon}
              title="Consulta de calorias"
              description="Faça consultas rápidas de calorias usando os ingredientes cadastrados."
              image={TestImage}
            />
            <FeaturesCard 
              icon={MenuIcon}
              title="Crie & Salve Receitas"
              description="Monte suas próprias receitas e acompanhe os macros."
              image={TestImage}
            />
          </div>
        </section>
      </div>
    </>
  );
}
