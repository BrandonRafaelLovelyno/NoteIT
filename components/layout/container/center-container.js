import { twMerge } from "tailwind-merge";

const CenterContainer = ({ children }) => {
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "flex flex-col justify-center items-center"
      )}
    >
      {children}
    </div>
  );
};

export default CenterContainer;
