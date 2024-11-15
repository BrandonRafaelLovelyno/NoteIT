import Image from "next/image";
import { twMerge } from "tailwind-merge";

const GoogleButton = ({ title }) => {
  return (
    <button
      className={twMerge(
        "w-full",
        "flex flex-row justify-center items-center gap-x-2",
        "py-1",
        "border-2 border-blue rounded-lg",
        "font-medium text-lg text-blue"
      )}
    >
      <div className={twMerge("relative", "w-8 h-8")}>
        <Image
          src={"/google-logo.png"}
          className="absolute"
          fill={true}
          alt="google"
        />
      </div>
      <p>{title}</p>
    </button>
  );
};

export default GoogleButton;
