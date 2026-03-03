import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="px-2 py-12 flex flex-col items-center gap-y-10">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-subtitle font-semibold text-center text-2xl md:text-3xl xl:text-4xl">
          Atinja seu objetivo de maneira <span className="bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text">leve e intuitiva</span>
        </h1>
        <p className="text-text text-center md:text-lg xl:text-xl">
          Experimente grátis o Macrolly e simplifique sua contagem de macros. 
        </p>
      </div>

      <Button animate>
        Comece Agora
      </Button>
      
    </section>
  )
}