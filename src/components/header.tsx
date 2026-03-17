import { CaretRightIcon } from "@phosphor-icons/react";
import UserIcon from '../assets/user-icon.svg'
import { cn } from "@/lib/utils";

interface HeaderProps {
  isSidebarOpen: boolean
  handleToggleSidebarMode: () => void
}

export function Header({handleToggleSidebarMode, isSidebarOpen}: HeaderProps) {
  
  return (
    <header className="sticky top-0 z-20 bg-white/50 flex items-center justify-center w-full min-h-16 backdrop-blur-2xl rounded-t-2xl overflow-hidden shadow shadow-shadow-smooth px-12 lg:min-h-20">
      <div className="mx-auto flex justify-center items-center w-full max-w-350 px-4 md:justify-between">
        <div className={cn("p-2 w-fit rounded-lg absolute left-2 cursor-pointer opacity-70 hover:opacity-80 transition-all duration-400 ",
          isSidebarOpen ? "rotate-180 hover:-ml-0.5" : "rotate-0 hover:ml-0.5"
        )} onClick={handleToggleSidebarMode} >
          <CaretRightIcon size={20} />
        </div>
        <h1 className="text-xl bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text w-fit font-logo tracking-wider drop-shadow-logo font-medium lg:text-2xl ">
          macrolly
        </h1>

        <div className="gap-x-3 hidden md:flex">
          <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg shadow-md">
            <img src={UserIcon} />
          </div>

          <div className="text-text text-xs">
            <span className="text-subtitle font-semibold text-sm"> Cadastre-se</span>  <br />
            ou <span className="text-subtitle font-semibold text-sm">Faça seu login</span>
          </div>
        </div>
      </div>
    </header>
  );
}
