import { Marquee } from "@/components/ui/marquee"
import { StarIcon } from "@phosphor-icons/react"

const reviews = [
  {
    name: "Renata Oliveira",
    body: "Sempre tentei controlar minha alimentação com planilhas, mas acabava desistindo depois de alguns dias. Com o Macrolly, tudo ficou mais simples e visual. Hoje acompanho minhas calorias e macros diariamente sem esforço e finalmente consigo manter consistência na dieta."
  },
  {
    name: "Carlos Henrique",
    body: "Faço musculação há anos e já usei vários apps. O diferencial do Macrolly é a praticidade para criar receitas personalizadas e reutilizá-las. Isso economiza muito tempo e evita erros nos cálculos."
  },
  {
    name: "Beatriz Almeida",
    body: "Sou iniciante no mundo fitness e sempre ficava perdida tentando entender proteína, carboidrato e gordura. O Macrolly organizou tudo de forma clara e objetiva, o que me ajudou a ganhar mais confiança na minha alimentação."
  },
  {
    name: "João Pedro Santos",
    body: "O que mais gostei no Macrolly foi a velocidade. Consigo registrar minhas refeições em poucos segundos, mesmo quando estou fora de casa. Isso faz toda a diferença para não abandonar o controle."
  },
  {
    name: "Larissa Mendes",
    body: "Depois que comecei a usar o Macrolly, consegui bater minhas metas de proteína com muito mais facilidade. Visualizar os números ao longo do dia me ajuda a ajustar as próximas refeições com estratégia."
  },
  {
    name: "Felipe Rocha",
    body: "Durante meu cutting, o Macrolly foi essencial. Ter clareza sobre calorias e macros evitou que eu extrapolasse sem perceber. O app é simples, mas extremamente eficiente."
  },
  {
    name: "Ana Clara Ribeiro",
    body: "Sou nutricionista e indico o Macrolly para pacientes que querem autonomia no controle alimentar. Ele facilita o acompanhamento e torna o processo mais educativo."
  },
  {
    name: "Marcelo Costa",
    body: "A função de salvar receitas foi um divisor de águas para mim. Tenho meus pratos favoritos cadastrados e não preciso recalcular toda vez que preparo algo parecido."
  },
  {
    name: "Isabela Martins",
    body: "O design limpo do Macrolly torna o uso muito intuitivo. Não há distrações ou funções confusas, apenas o essencial para controlar minha alimentação de forma prática."
  },
  {
    name: "Rodrigo Alves",
    body: "Com a rotina corrida de trabalho, precisava de algo rápido e confiável. O Macrolly me permite registrar refeições no intervalo do almoço sem perder tempo."
  },
  {
    name: "Camila Duarte",
    body: "Antes eu subestimava pequenas calorias ao longo do dia. Com o Macrolly, passei a ter uma visão real do que consumo e isso melhorou muito meus resultados."
  },
  {
    name: "Daniel Ferreira",
    body: "Uso o Macrolly tanto em fases de bulking quanto de cutting. Ajustar metas e acompanhar o progresso ficou muito mais organizado e estratégico."
  },
  {
    name: "Natália Gomes",
    body: "O Macrolly me ajudou a desenvolver disciplina alimentar. Ver meus macros atualizados diariamente me mantém motivada e focada no meu objetivo."
  },
  {
    name: "Bruno Tavares",
    body: "Eu sempre errava nas contas quando tentava calcular manualmente. Com o Macrolly, tenho precisão e praticidade em um único lugar."
  },
  {
    name: "Juliana Azevedo",
    body: "O Macrolly trouxe clareza para minha alimentação. Agora sei exatamente quanto estou consumindo de cada macronutriente e consigo planejar melhor minhas refeições."
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(0, reviews.length / 2)

const ReviewCard = ({
  body,
  name
}: {
  body: string,
  name: string
}) => {
  return (
    <figure className="shadow-card rounded-xl px-4 py-6 flex flex-col gap-y-5 max-w-120 md:px-10">
      <div className="flex gap-x-1">
        <StarIcon weight="fill" className="text-secondary" size={12} />
        <StarIcon weight="fill" className="text-secondary" size={12} />
        <StarIcon weight="fill" className="text-secondary" size={12} />
        <StarIcon weight="fill" className="text-secondary" size={12} />
        <StarIcon weight="fill" className="text-secondary" size={12} />
      </div>
      <div className="flex flex-col justify-between h-full ">
        <p className="text-sm text-text text-justify">
          {body}
        </p>
        <div className="text-sm text-right text-text/30">
          - {name}
        </div>
      </div>
    </figure>
  )
}

export function Testimonials() {

  
  return (
    <section className="px-2 py-12 space-y-10">
      <div className="flex flex-col items-center gap-y-3">
        <h1 className="text-subtitle font-semibold text-center text-2xl md:text-3xl xl:text-4xl">
          Feito para você. Testado e aprovado 
        </h1>
        <p className="text-text text-center md:text-lg xl:text-xl">
          Veja o que os usuários falam após utilizar o macrolly!  
        </p>
      </div>


      <div className="flex md:hidden">

      </div>

      <div className="flex-col gap-y-4 hidden md:flex">
        <Marquee pauseOnHover className="[--duration:60s] overflow-visible">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s] overflow-visible">
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
      </div>  


      
    </section>
  )
}