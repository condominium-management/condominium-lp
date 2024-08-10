import Check from "@/public/assets/check.svg";
import Close from "@/public/assets/close.svg";
import Image from "next/image";

export type ServiceCheckList = {
  isChecked: boolean;
  description: string;
};

export type Period = "mês" | "ano";

export type PriceCardProps = {
  title: string;
  price: number;
  period: Period;
  serviceCheckList: ServiceCheckList[];
};

export default function PriceCard({
  period,
  price,
  serviceCheckList,
  title,
}: PriceCardProps) {
  return (
    <div className="lg:w-1/2 rounded-lg my-10 p-6 border-solid border-2">
      <h3 className="text-base font-bold">{title}</h3>
      <p className="mt-2 font-extrabold text-4xl text-green-700">
        R${price.toFixed(2)}
        <span className="text-base text-black"> / {period}</span>
      </p>

      {serviceCheckList.map((service) => (
        <p className="flex items-center align-middle gap-2 mt-4 text-[13px]">
          <Image src={service.isChecked ? Check : Close} width={20} alt="" />
          <span className={`${!service.isChecked && "line-through"}`}>
            {service.description}
          </span>
        </p>
      ))}
    </div>
  );
}
