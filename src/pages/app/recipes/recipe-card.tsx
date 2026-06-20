import ProteinIcon from "@/assets/protein-icon.svg"

import { BookmarkSimpleIcon, FireIcon, LeafIcon } from "@phosphor-icons/react";

interface RecipesCardProps {
  imgSrc: string
  title: string
  calories: number
  proteins: number
  fiber: number
}

export function RecipeCard({ imgSrc, title, calories, proteins, fiber}: RecipesCardProps) {
  return (
    <div className="bg-surface shadow-card shadow-black/10 rounded-xl p-1.5 min-h-fit h-28 flex gap-x-2 hover:shadow-black/20 transition-shadow duration-150 cursor-pointer md:flex-col md:w-full md:max-w-70">
      <img src={imgSrc} className="w-2/7 min-h-full object-cover rounded-md md:w-full h-30 md:shadow" />

      <div className="flex flex-col gap-1.5 w-full min-h-fit">
        <div className="flex justify-between p-1 gap-x-2 md:pt-2.5">
          <h3 className="font-semibold line-clamp-2 min-h-12">{title}</h3>
          <BookmarkSimpleIcon size={24} className="text-brand min-w-6" />
        </div>

        <div className="h-px w-full bg-linear-to-r from-surface via-surface-soft to-surface" />

        <div className="flex justify-around gap-x-4 p-1 flex-wrap">
          <div className="text-sm flex items-center gap-1 text-text md:gap-x-1.5">
            <FireIcon weight="fill" className="text-brand-light" size={16}/>
            <span className="text-brand-light font-semibold">{calories}</span> kcal
          </div>
          <div className="text-sm flex items-center gap-1 text-text md:gap-x-1.5">
            <img src={ProteinIcon} className="size-4"/>
            {proteins}g
          </div>
          <div className="text-sm flex items-center gap-1 text-text md:gap-x-1.5">
            <LeafIcon weight="fill" className="text-fiber" size={16}/>
            {fiber}g
          </div>
        </div>
      </div>
    </div>
  )
}