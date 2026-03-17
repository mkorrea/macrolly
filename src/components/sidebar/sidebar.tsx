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
        "bg-bg h-full py-2 px-1   overflow-y-auto no-scrollbar overflow-x-hidden  flex flex-col gap-y-4  transition-all duration-500 ease   absolute left-0 z-50 md:relative   ",
        isSidebarOpen
          ? "w-screen         flex md:w-68 "
          : "w-0         md:min-w-16 md:w-16 md:hover:w-68",
      )}
    >

      <div className="min-h-16 lg:min-h-20  flex flex-col justify-between ">
        <div className="flex items-center gap-x-6 h-full">
          <div className="min-w-14  flex justify-center items-center ">
            <img src={Logo} width={40} />
          </div>
          <h1 className="text-xl bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text w-fit font-logo tracking-wider drop-shadow-logo font-medium lg:text-2xl ">
            macrolly
          </h1>
          <div className={cn("p-2 w-fit rounded-lg absolute right-3 cursor-pointer opacity-80 hover:opacity-90 transition-all duration-400 md:hidden",
                isSidebarOpen
                ? "text-text"
                : "text-transparent"
              )} onClick={handleToggleSidebarMode} >
            <X size={24} />
          </div>
        </div>

        <Divider />
      </div>


      <nav className="flex flex-col gap-y-3 w-full ">
        {sidebarItems.general.map((item) => {
          return (
            <SidebarItem label={item.label} path={item.path} icon={item.icon} />
          );
        })}
      </nav>

      <div className="flex flex-col justify-between w-full mt-auto h-16 lg:h-20 ">
        <Divider />

        <Popover placement="right">
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
          <PopoverContent className="border border-px border-[#DDDDDD] bg-white min-w-52 rounded-lg">
            <button className="relative w-full rounded-lg flex items-center p-2  font-semibold overflow-hidden transition-all duration-200 hover:text-danger text-navbar-menu active:scale-95 cursor-pointer">
              <SignOutIcon
                weight="fill"
                className="size-6 min-w-6 ml-px drop-shadow-md "
              />

              <div className="w-full font-semibold overflow-hidden">Sair</div>
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
