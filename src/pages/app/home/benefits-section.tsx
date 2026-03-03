import BenefitsBg from '@/assets/benefits-bg.png'
import { CheckIcon } from "@phosphor-icons/react";

export function BenefitsSection() {
  return (
    <section className="relative px-2 w-full h-175 flex flex-col items-center z-0 lg:h-210" >
      <img
        src={BenefitsBg}
        className="min-w-screen h-full object-cover"
        />

        <div className="
        pointer-events-none
        absolute inset-0
        bg-[linear-gradient(to_bottom,white,transparent_5%,transparent_95%,white)]
      "/>

      <div className="absolute top-15 mx-2 flex flex-col items-center gap-y-5 ">
        <div className="space-y-3">
          <h1 className="text-subtitle font-semibold text-center text-2xl md:text-3xl xl:text-4xl">
            Porque usar o Macrolly?
          </h1>
          <p className="text-text text-center md:text-lg xl:text-xl">
            Descomplique sua dieta e ganhe mais praticidade no dia a dia:
          </p>
        </div>

        <div className="bg-white/60 backdrop-blur-lg w-full max-w-140 rounded-xl px-3 py-5 space-y-6 shadow-card lg:px-5">
          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <CheckIcon className="text-primary " weight="bold" />
            <span className="text-sm text-text">Pare de calcular macros manualmente</span>
          </div>

          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <CheckIcon className="text-primary " weight="bold" />
            <span className="text-sm text-text">Reaproveite suas receitas favoritas sem recalcular</span>
          </div>

          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <CheckIcon className="text-primary " weight="bold" />
            <span className="text-sm text-text">Deixe seus macros organizados em um único lugar</span>
          </div>
        </div>
      </div>

    </section>
  )
}