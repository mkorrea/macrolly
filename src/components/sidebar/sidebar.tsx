import Logo from "@/assets/logo.png";
import { Divider } from "./divider";
import { SidebarItem } from "./sidebar-item";
import { sidebarItems } from "./sidebar.config";
import { SignOutIcon, UserIcon, X } from "@phosphor-icons/react";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isSidebarOpen: boolean;
  handleToggleSidebarMode: () => void
}

export function Sidebar({ isSidebarOpen, handleToggleSidebarMode }: SidebarProps) {
  return (
    <div
      className={cn(
        "absolute left-0 z-50 h-full flex flex-col gap-y-4 bg-bg py-2 px-1   overflow-y-auto no-scrollbar overflow-x-hidden   transition-all duration-500 ease   md:relative  md:min-w-16  ",
        isSidebarOpen
          ? "w-screen  md:w-68 "
          : "w-0         md:w-16",
      )}
    >

      <div className="min-h-16 lg:min-h-20  flex flex-col justify-between ">
        <div className="flex items-center justify-between gap-x-6 h-full">
          <div className="min-w-14  flex justify-center items-center ">
            <img src={Logo} width={40} />
          </div>
          <h1 className="text-xl mr-auto bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text w-fit font-logo tracking-wider drop-shadow-logo font-medium lg:text-2xl">
            macrolly
          </h1>
          <div className={cn("p-2 w-fit rounded-lg m-2 cursor-pointer opacity-80 hover:opacity-90 transition-all duration-400 active:scale-90 md:hidden",
                isSidebarOpen
                ? "text-text"
                : "text-transparent"
              )} onClick={handleToggleSidebarMode} >
            <X size={20} />
          </div>
        </div>

        <Divider />
      </div>


      <nav className="flex flex-col gap-y-3 w-full ">
        {sidebarItems.general.map((item) => {
          return (
            <SidebarItem label={item.label} path={item.path} icon={item.icon} isSidebarOpen={isSidebarOpen} />
          );
        })}
      </nav>

      <div className="flex flex-col justify-between w-full mt-auto h-16 lg:h-20 ">
        <Divider />

        <Popover placement="top-start">
          <PopoverTrigger>
            <div className=" flex items-center gap-x-2 cursor-pointer h-full">
                <div className="min-w-14 w-14 flex justify-center items-center ">
                  <div className="min-w-10 ml-px h-10 flex items-center justify-center p-1 bg-linear-to-br from-secondary to-primary rounded-lg border-2 border-white shadow-navbar-menu">
                    <UserIcon className="size-6 text-white drop-shadow-[0px_0px_1px] shadow-white" />
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden ">
                  <h3 className="font-semibold truncate max-w-full text-title">
                    Emile Medeiros dos Santos
                  </h3>
                  <p className="text-navbar-menu text-xs truncate max-w-44">
                    emilemds07@gmail.com
                  </p>
                </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="border border-px border-[#DDDDDD] bg-white min-w-55 p-1  rounded-lg">
            <button className="relative w-full rounded-lg flex items-center p-2  font-semibold overflow-hidden transition-all duration-200 hover:text-text/90 text-navbar-menu active:scale-98 cursor-pointer">
              <UserIcon
                weight="fill"
                className="size-5 min-w-5 ml-px drop-shadow-md "
              />

              <div className="w-full font-semibold overflow-hidden">Meu perfil</div>
            </button>

            <button className="relative w-full rounded-lg flex items-center p-2  font-semibold overflow-hidden transition-all duration-200 hover:text-danger text-navbar-menu active:scale-98 cursor-pointer">
              <SignOutIcon
                weight="fill"
                className="size-5 min-w-5 ml-px drop-shadow-md "
              />

              <div className="w-full font-semibold overflow-hidden">Sair</div>
            </button>

            {!isSidebarOpen && (
              <>
                <div className="h-px w-full bg-linear-to-r rounded-full from-transparent via-text/10 to-transparent" />

                <div className="flex flex-col overflow-hidden py-3 ">
                  <h3 className="font-semibold truncate max-w-full text-title/80">
                    Emile Medeiros dos Santos
                  </h3>
                  <p className="text-navbar-menu/80 text-xs truncate max-w-44">
                    emilemds07@gmail.com
                  </p>
                </div>
              </>
              )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
