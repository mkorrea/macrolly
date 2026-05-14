import HeroRecipes from "@/assets/hero-recipes.png"
import { Button } from "@/components/ui/button"

export function HeroRecipesSection() {
  return (
    <>
    <div className="relative w-full">
      <img
        src={HeroRecipes}
        className="h-165 w-full object-cover object-bottom rounded-t-2xl -mt-16 lg:-mt-20
        sm:h-223
        xl:h-260"
        />

    </div>

      <section className="absolute top-24 px-2 flex flex-col w-full max-w-350 gap-y-6 z-10 md:gap-y-12">
        <div className="space-y-4 md:space-y-6 md:w-4/6">
          <h1 className="min-w-fit font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-title">
            Controle Seus Macros. <br />
            Simplifique Suas Receitas.
          </h1>
          <h3 className=" text-sm md:text-2xl font-medium text-title">
            Registre ingredientes, crie receitas e monitore sua nutrição em um
            só lugar.
          </h3>
        </div>

        <div className="space-y-4">
          <Button size="responsive" animate>
            Comece Agora
          </Button>

          <p className="text-xs text-text opacity-50 md:text-sm lg:text-base">
            Experimente grátis - sem cadastro
          </p>
        </div>
      </section>
    </>
  )
}