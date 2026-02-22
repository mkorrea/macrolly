import { PageHead } from "@/components/page-head";
import HeroBg from "@/assets/hero-bg.png";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <>
      <PageHead title="Início" />

      <div className="relative flex justify-center">
        <img
          src={HeroBg}
          className="h-165 w-full object-cover object-bottom  absolute left-0 z-0 rounded-t-2xl -mt-20
          sm:h-223
          xl:h-260"
        />

        <section className="mt-20 mx-2 z-30 flex flex-col w-full max-w-350">
          <div className="space-y-4 md:space-y-6 md:w-4/6">
            <p className="text-xs sm:text-xl text-text">
              Assistente fitness de nutrição
            </p>
            <h1 className="min-w-fit font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-title">
              Controle Seus Macros. <br />
              Simplifique Suas Receitas.
            </h1>
            <h3 className=" text-sm md:text-2xl font-medium text-title">
              Registre ingredientes, crie receitas e monitore sua nutrição em um
              só lugar.
            </h3>
          </div>

          <div>
            <Button 
              size="lg"
            />
            <button className="bg-linear-to-r from-secondary to-primary px-4 text-sm lg:text-base rounded-md">
              Comece Agora
            </button>
          </div>
        </section>


      </div>
    </>
  );
}

