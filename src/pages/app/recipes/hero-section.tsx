import HighlightedRecipe from "@/assets/recipes-hero-bg.png"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { DnaIcon, FadersHorizontalIcon, FireIcon, LeafIcon, MagnifyingGlassIcon, PlusIcon, StarIcon } from "@phosphor-icons/react"
import { RecipeCard } from "./recipe-card"

import PaoDeQueijo from "@/assets/pao-de-queijo.jpg"

export function HeroRecipesSection() {
  return (
    <div className="space-y-8">
      <section className="relative rounded-2xl overflow-hidden shadow-lg max-w-350 mx-1.5 md:mx-auto">
        <img src={HighlightedRecipe} className="absolute w-full h-full object-cover " />
        <div className="absolute w-full h-full bg-linear-to-r from-black/60 to-black/30 " />

        <div className="relative p-5 max-w-300 mx-auto flex flex-col justify-between gap-y-5 md:flex-row md:items-end md:py-8">
          <div className="space-y-2 md:space-y-4 md:max-w-100">
            <p className="text-xs text-brand-light font-bold flex items-center gap-x-1.5 lg:text-base"> 
              <StarIcon weight="duotone" className="size-4 lg:size-5" />
              Receita Destaque
            </p>
            <h2 className="text-xl text-white font-semibold lg:text-[40px]">Pão de Queijo na Frigideira</h2>
            <p className="text-xs text-white lg:text-base">Uma receita prática, rápida e com baixa quantidade de calorias</p>
            <Button variant="primary" size="lg">
              Ver Receita
            </Button>
          </div>

          <div className="flex gap-x-3">
            <div className="bg-[#49200d]/20 border border-[#EAA483]/60 backdrop-blur-md p-3 pb-2 w-full h-fit flex flex-col items-center gap-y-2 rounded-lg md:w-20">
              <FireIcon className="hidden md:flex text-[#EAA483]" weight="thin" size={24} />
              <div className="flex flex-col items-center gap-y-1">
                <span className="text-[#ffcfb5]">220</span>
                <span className="text-xs text-[#FFE9DE]/80">Calorias</span>
              </div>
            </div>

            <div className="bg-[#49200d]/20 border border-[#EAA483]/60 backdrop-blur-md p-3 pb-2 w-full h-fit flex flex-col items-center gap-y-2 rounded-lg md:w-20">
              <DnaIcon className="hidden md:flex text-[#EAA483]" weight="thin" size={24} />
              <div className="flex flex-col items-center gap-y-1">
                <span className="text-[#ffcfb5]">18g</span>
                <span className="text-xs text-[#FFE9DE]/80">Proteínas</span>
              </div>
            </div>

            <div className="bg-[#49200d]/20 border border-[#EAA483]/60 backdrop-blur-md p-3 pb-2 w-full h-fit flex flex-col items-center gap-y-2 rounded-lg md:w-20">
              <LeafIcon className="hidden md:flex text-[#EAA483]" weight="thin" size={24} />
              <div className="flex flex-col items-center gap-y-1">
                <span className="text-[#ffcfb5]">7g</span>
                <span className="text-xs text-[#FFE9DE]/80">Fibras</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-3 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold ">Receitas</h1>
          <Button variant="primary" icon={ PlusIcon }>
            Nova Receita
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex gap-x-2">
            <Input leftIcon={ MagnifyingGlassIcon } />
              <Drawer>
                <DrawerTrigger>
                  <Button variant="ghost" icon={ FadersHorizontalIcon }>
                    Filtros
                  </Button>
                </DrawerTrigger>

                <DrawerContent className="bg-surface border-none">
                  <div className="flex flex-col gap-y-3">
                    <DrawerHeader>
                      <h1 className="text-text text-lg">Filtros de pesquisa</h1>
                    </DrawerHeader>
                    <div className="flex flex-col mx-auto px-4 gap-4">
                      <h2 className="text-text">Por tipo de refeição:</h2>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="primary" className="">Todas</Button>
                        <Button size="sm" variant="secondary" className="">Café da Manhã</Button>
                        <Button size="sm" variant="secondary" className="">Almoço</Button>
                        <Button size="sm" variant="secondary" className="">Lanche</Button>
                        <Button size="sm" variant="secondary" className="">Janta</Button>
                        <Button size="sm" variant="secondary" className="">Sobremesa</Button>
                      </div>
                    </div>
                    <DrawerFooter>
                      <Button variant="primary">Filtrar</Button>
                      <DrawerClose>
                        <Button variant="secondary" className="w-full">Cancelar</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
          </div>
        </div>          
      </section>


      <section className="px-3 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-text text-xl font-semibold">Minhas receitas</h2>
          <span className="text-brand text-sm font-semibold cursor-pointer">Ver todas</span>
        </div>

        <div className="space-y-3 md:flex flex-wrap gap-4">
          <RecipeCard imgSrc={PaoDeQueijo} title="Pão de Queijo de frigideira" calories={235} proteins={14} fiber={4} />
          <RecipeCard imgSrc={PaoDeQueijo} title="Pão de Queijo de frigideira Pão de Queijo de frigideira Pão de Queijo Pão de Queijo" calories={235} proteins={14} fiber={4} />
          <RecipeCard imgSrc={PaoDeQueijo} title="Pão de Queijo de frigideira" calories={235} proteins={14} fiber={4} />
          <RecipeCard imgSrc={PaoDeQueijo} title="Pão de Queijo de frigideira" calories={235} proteins={14} fiber={4} />
        </div>
      </section>







          {/* <div className="flex items-center gap-x-3">
            <div className="relative w-full">
              <Select.Root>
                <Select.Trigger className="w-50 h-9 flex items-center px-2 text-text border border-border rounded-xl shadow-button shadow-black/10 focus:outline-brand">
                  <span className="w-full">Todas</span>''
                  <Select.Icon>
                    <ChevronDown />
                  </Select.Icon>
                </Select.Trigger>
                  <Select.Content className="bg-surface w-50 border border-border rounded-xl overflow-hidden">
                    <Select.Group className="w-full text-center text-text">
                      <Select.Item value="breakfast" className="py-1.5 select-none hover:bg-brand-soft  hover:outline-none">
                        <Select.ItemText>
                          Todas
                        </Select.ItemText>
                      </Select.Item>
                      <Select.Item value="breakfast" className="py-1.5 select-none hover:bg-brand-soft  hover:outline-none">
                        <Select.ItemText>
                          Café da manhã
                        </Select.ItemText>
                      </Select.Item>
                      <Select.Item value="breakfast" className="py-1.5 select-none hover:bg-brand-soft  hover:outline-none">
                        <Select.ItemText>
                          Almoço
                        </Select.ItemText>
                      </Select.Item>
                      <Select.Item value="breakfast" className="py-1.5 select-none hover:bg-brand-soft  hover:outline-none">
                        <Select.ItemText>
                          Lanche
                        </Select.ItemText>
                      </Select.Item>
                      <Select.Item value="breakfast" className="py-1.5 select-none hover:bg-brand-soft  hover:outline-none">
                        <Select.ItemText>
                          Janta
                        </Select.ItemText>
                      </Select.Item>
                      <Select.Item value="breakfast" className="py-1.5 select-none hover:bg-brand-soft  hover:outline-none">
                        <Select.ItemText>
                          Sobremesa
                        </Select.ItemText>
                      </Select.Item>
                    </Select.Group> 
                  </Select.Content>
              </Select.Root>
            </div>
          </div> */}
  
  
    </div>
  )
}