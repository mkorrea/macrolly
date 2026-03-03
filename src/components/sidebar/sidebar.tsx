
import Logo from "@/assets/logo.png";
import { Divider } from "./divider";
import { SidebarItem } from "./sidebar-item";
import { sidebarItems } from "./sidebar.config";
import { SignOutIcon, UserIcon } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <div className="w-16 h-full hidden py-5 pr-1 gap-y-10 overflow-y-auto overflow-x-hidden md:flex flex-col transition-all duration-500 ease md:hover:w-68">
      <div className="flex items-center gap-x-6 ml-2">
        <img src={Logo} width={40} className="" />

        <h1 className="text-xl bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text w-fit font-logo tracking-wider drop-shadow-logo font-medium lg:text-2xl ">
          macrolly
        </h1>
      </div>

      <Divider />

        <div className="space-y-4">
          <p className="text-navbar-menu text-sm opacity-50 w-16 text-center">GERAL</p>
          <nav className="flex flex-col gap-y-6 w-full">
            {sidebarItems.general.map(item => {
              return (
                <SidebarItem
                  label={item.label}
                  path={item.path}
                  icon={item.icon}
                />
              )
            })}
          </nav>
        </div>

        <Divider />

        <div className="space-y-4">
          <p className="text-navbar-menu text-sm opacity-50 w-16 text-center">CONTA</p>
          <nav className="flex flex-col gap-y-6">
            {sidebarItems.account.map(item => {
              return (
                <SidebarItem
                  label={item.label}
                  path={item.path}
                  icon={item.icon}
                />
              )
            })}
        
            <button
              className='relative rounded-lg flex items-center px-4 py-3 gap-x-6 font-semibold overflow-hidden transition-all duration-200 hover:text-danger text-navbar-menu active:scale-95 cursor-pointer'
            >
              <SignOutIcon
                weight="fill"
                className="size-6 min-w-6 ml-px drop-shadow-md "
              />
              <span className="text-nowrap text-clip overflow-x-hidden w-full text-start"> Sair </span>
            </button>
          </nav>
        </div>

      <span className="mt-auto">
        <Divider />
      </span>

      <div className="px-2 flex gap-x-4 w-full ">
        <div className="min-w-10 ml-px h-10 flex items-center justify-center p-1 bg-linear-to-br from-secondary to-primary rounded-lg border-2 border-white shadow-navbar-menu">
          <UserIcon className="size-6 text-white drop-shadow-[0px_0px_1px] shadow-white" />
        </div>

        <div className="flex flex-col overflow-hidden ">
          <h3 className="font-semibold truncate max-w-full text-title">Emile Medeiros dos Santos</h3>
          <p className="text-navbar-menu text-xs truncate max-w-44">emilemds07@gmail.com</p>
        </div>
        
      </div>
    </div>
  );
}
