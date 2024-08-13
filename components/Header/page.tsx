import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";

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
      <div className="hidden sm:flex gap-9">
        <div className="flex gap-9 pt-3">
          <Link href={"#services"}>
            <p className="cursor-pointer">Serviços</p>
          </Link>
          <Link href={"#prices"}>
            <p className="cursor-pointer">Preços</p>
          </Link>
          <Link href={"#"}>
            <p className="cursor-pointer">FAQ</p>
          </Link>
        </div>
        <Link href={"#cta"}>
          <button className="text-white rounded-lg cursor-pointer bg-[#2B8FE3] pl-4 pr-4 pt-3 pb-3">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
}
