import { twMerge } from "tailwind-merge";

const Divider = ({ title }) => {
  return (
    <div className={twMerge("w-full", "flex flex-row items-center gap-x-3")}>
      <div className={twMerge("flex-1 h-[2px]", "bg-blue")} />
      <p className={twMerge("text-blue font-semibold text-lg")}>{title}</p>
      <div className={twMerge("flex-1 h-[2px]", "bg-blue")} />
    </div>
  );
};

export default Divider;
