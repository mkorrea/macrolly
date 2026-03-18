import { FeaturesCard } from "./features-card";

import IngredientsIcon from "@/assets/ingredients-icon.svg";
import MenuIcon from "@/assets/menu-icon.svg";
import ScaleIcon from "@/assets/scale-icon.svg";
import TestImage from "@/assets/image 9.png";

export function FeaturesSection() {
  return (
    <section className="-mt-28 px-2 mb-28 flex flex-col items-center gap-y-10 w-full max-w-350 z-10">
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
          icon={ScaleIcon}
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
  )
}