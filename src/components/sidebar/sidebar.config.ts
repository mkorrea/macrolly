import { BreadIcon, CookingPotIcon, HouseSimpleIcon, UserIcon } from "@phosphor-icons/react";

export const sidebarItems = {
  general: [
    {
      label: "Início",
      path: "/",
      icon: HouseSimpleIcon
    },
    {
      label: "Receitas",
      path: "/recipes",
      icon: CookingPotIcon
    },
    {
      label: "Ingredientes",
      path: "/ingredients",
      icon: BreadIcon
    },
    {
      label: "Meu Perfil",
      path: "/profile",
      icon: UserIcon
    },
  ],
  // account: [
  //   {
  //     label: "Meu Perfil",
  //     path: "/profile",
  //     icon: UserIcon
  //   },
  // ]
}