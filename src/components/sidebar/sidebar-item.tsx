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
      className={({ isActive }) => clsx('relative rounded-lg flex items-center px-5 py-3 gap-x-6 font-semibold  overflow-hidden transition-all duration-200', 
        isActive 
        ? "bg-white shadow-navbar-menu text-accent hover:brightness-105"
        : "text-navbar-menu hover:text-text active:scale-95"
      )}
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <div className={clsx("absolute left-0  w-1.5 h-8 rounded-r-full transition-all duration-500 delay-700",
              isActive ? 'bg-primary' : 'bg-transparent'
            )} />
          )}

          <Icon 
            weight="fill" 
            className={clsx("size-6 min-w-6 ml-px drop-shadow-sm "
            )}
          />

          <span className="text-nowrap">{label}</span>
        </>
      )}
    </NavLink>
  )
}