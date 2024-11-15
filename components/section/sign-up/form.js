import TextInput from "@/components/form/text-input";
import { twMerge } from "tailwind-merge";

const INPUTS = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name...",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email address...",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Type your password...",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password...",
  },
];

const SignUpForm = () => {
  return (
    <div className={twMerge("flex flex-col items-center gap-y-8")}>
      <div className={twMerge("flex flex-col gap-y-3", "tracking-wider")}>
        {INPUTS.map((input) => (
          <TextInput key={input.name} {...input} />
        ))}
      </div>
      <button
        className={twMerge(
          "w-full",
          "py-2",
          "bg-blue",
          "rounded-lg",
          "text-white font-medium text-xl"
        )}
      >
        Register
      </button>
    </div>
  );
};

export default SignUpForm;
