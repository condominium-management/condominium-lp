import Image, { StaticImageData } from "next/image";

export type CardProps = {
  title: string;
  description: string;
  bgUrl: StaticImageData;
  isActive: boolean;
};

export default function Card({
  bgUrl,
  description,
  title,
  isActive,
}: CardProps) {
  return (
    <div>
      <div className="max-w-[400px] lg:max-w-[220px]">
        <Image src={bgUrl} alt={title} />
        <p className="mt-2 text-base text-[#121417] text-normal">{title}</p>
        <p className="text-sm mt-3 text-[#637887]">{description}</p>
      </div>
    </div>
  );
}
