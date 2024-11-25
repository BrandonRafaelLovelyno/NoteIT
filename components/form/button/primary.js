import { twMerge } from "tailwind-merge";

export default function PrimaryButton({title, onClick}){
    return  <button
    className={twMerge(
      "w-full",
      "py-1 px-10",
      "bg-blue",
      "rounded-lg",
      "text-white font-medium text-xl"
    )}
    onClick={onClick}
  >
    {title}
  </button>
}