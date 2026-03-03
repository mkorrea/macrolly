import { ListIcon } from "@phosphor-icons/react";
import UserIcon from '../assets/user-icon.svg'

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/50 flex items-center justify-center w-full min-h-16 backdrop-blur-2xl rounded-t-2xl overflow-hidden shadow shadow-shadow-smooth lg:min-h-20">
      <div className="mx-auto flex justify-center items-center w-full max-w-350 px-4 md:justify-between">
        <div className="p-2 w-fit rounded-lg absolute left-3 cursor-pointer md:hidden">
          <ListIcon size={24} />
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
