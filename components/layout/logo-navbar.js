import Image from "next/image";
import { twMerge } from "tailwind-merge";

const LogoNavbar = ({ title }) => {
  return (
    <div
      className={twMerge("w-full h-fit", "flex flex-row items-center gap-x-8")}
    >
      <Image src={"/onlyLogo.svg"} width={60} height={60} alt="logo" />
      <div className={twMerge("w-[2px] h-6", "bg-blue")} />
      <p className={twMerge("text-xl text-blue font-semibold")}>{title}</p>
    </div>
  );
};

export default LogoNavbar;
