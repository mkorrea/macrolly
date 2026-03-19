import { CaretRightIcon, ListIcon, PaperclipIcon, SignInIcon } from "@phosphor-icons/react";
import UserIcon from "../assets/user-icon.svg";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";

interface HeaderProps {
  isSidebarOpen: boolean;
  handleToggleSidebarMode: () => void;
}

export function Header({
  handleToggleSidebarMode,
  isSidebarOpen,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-white/70 flex items-center justify-center w-full min-h-16 backdrop-blur-2xl rounded-t-2xl overflow-hidden shadow shadow-shadow-smooth md:px-12 lg:min-h-20">
      <div className="mx-auto flex justify-between items-center w-full max-w-350 px-4 md:justify-between">
        <div
          className={cn(
            "p-2 w-fit rounded-lg cursor-pointer opacity-70 hover:opacity-80 transition-all duration-400 md:absolute md:left-3",
            isSidebarOpen
              ? "  md:rotate-180 md: md:hover:-ml-0.5"
              : " md:rotate-0 md:hover:ml-0.5",
          )}
          onClick={handleToggleSidebarMode}
        >
          <ListIcon size={20} className="md:hidden" />
          <CaretRightIcon size={20} className="hidden md:flex" />
        </div>
        <h1 className="text-xl bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text w-fit font-logo tracking-wider drop-shadow-logo font-medium lg:text-2xl  ">
          macrolly
        </h1>

        
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg shadow-md cursor-pointer md:hidden">
                <img src={UserIcon} />
              </div>
            </PopoverTrigger>
              <PopoverContent className="border border-px border-[#DDDDDD] bg-white min-w-55 p-1 rounded-lg md:hidden">
                <button className="relative w-full rounded-lg flex items-center p-2  font-semibold overflow-hidden transition-all duration-200 hover:text-text/90 text-text hover:bg-text/5 active:scale-98 cursor-pointer">
                <SignInIcon
                  weight="fill"
                  size={20}
                  className="ml-px drop-shadow-md "
                />

                <div className="w-full font-semibold overflow-hidden">Entrar</div>
              </button>

              <button className="relative w-full rounded-lg flex items-center p-2  font-semibold overflow-hidden transition-all duration-200 hover:text-text/90 text-text hover:bg-text/5 active:scale-98 cursor-pointer">
                <PaperclipIcon
                  size={20}
                  className="ml-px drop-shadow-md "
                />

                <div className="w-full font-semibold overflow-hidden">Cadastre-se</div>
              </button>
            </PopoverContent>
          </Popover>

        <div className="gap-x-3 hidden md:flex">
          <div className="w-10 h-10 flex justify-center items-center bg-white rounded-lg shadow-md">
            <img src={UserIcon} />
          </div>

          <div className="text-text text-xs">
            <span className="text-subtitle font-semibold text-sm">Entre </span>  <br />
            ou <span className="text-subtitle font-semibold text-sm">Cadastre-se</span>
          </div>
        </div>
      </div>
    </header>
  );
}
