import { twMerge } from "tailwind-merge";

const TextInput = ({ name, label, placeholder }) => {
  return (
    <div className={twMerge("flex flex-col gap-y-1")}>
      <p className={twMerge("px-3", "text-blue text-lg font-medium")}>
        {label}
      </p>
      <input
        className={twMerge(
          "px-5 py-2",
          "bg-transparent",
          "border-2 border-blue rounded-lg",
          "text-blue text-lg font-medium",
          "placeholder:text-blue placeholder:text-lg placeholder:font-medium",
          "drop-shadow-2xl"
        )}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
