import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  label: string
  path: string
  icon: React.ElementType
}

export function SidebarItem({ label, path, icon: Icon }: SidebarItemProps) {
  return (
    <NavLink 
      to={path} 
      className={({ isActive }) => clsx('relative rounded-lg flex items-center py-3 gap-x-2 font-semibold  overflow-hidden transition-all duration-200', 
        isActive 
        ? "bg-white shadow-navbar-menu text-accent hover:brightness-105"
        : "text-navbar-menu hover:text-text active:scale-97"
      )}
    >
      {({ isActive }) => (
        <>
        <div className={clsx("absolute  w-1 h-6 rounded-r-full transition-all duration-500 bg-primary/80 shadow-[0px_0px_4px_2px] shadow-primary/10",
          isActive ? 'left-0' : '-left-2'
        )} />


          <div className="min-w-14 flex justify-center w-fit items-center ">
            <Icon 
              weight="fill" 
              className={clsx("size-6 min-w-6 drop-shadow-sm transition-all duration-200",
                // isActive && "ml-1"
              )}
            />
          </div>


          <span className="text-nowrap text-clip overflow-x-hidden w-full">{label}</span>
        </>
      )}
    </NavLink>
  )
}