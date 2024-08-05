import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between px-8 py-5 border-b-2 border-gray-200">
      <div className="pt-3">
        <p className={`flex items-center gap-2 font-bold text-lg`}>
          <span>
            <Image width={30} src={logo} alt="logo" />
          </span>
          CondoFácil
        </p>
      </div>
      <div className="flex gap-9">
        <div className="flex gap-9 pt-3">
          <p className="cursor-pointer">Serviços</p>
          <p className="cursor-pointer">Preços</p>
          <p className="cursor-pointer">Recursos</p>
          <p className="cursor-pointer">FAQ</p>
        </div>
        <button className="text-white rounded-lg cursor-pointer bg-[#2B8FE3] pl-4 pr-4 pt-3 pb-3">
          Sign In
        </button>
      </div>
    </header>
  );
}
