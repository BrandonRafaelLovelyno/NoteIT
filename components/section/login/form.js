import TextInput from "@/components/form/text-input";
import { twMerge } from "tailwind-merge";
import Link from 'next/link';

const INPUTS = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email address...",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password...",
  }
];

const LoginForm = () => {
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
        <Link
        href="/home">
        Login
        </Link>
      </button>
    </div>
  );
};

export default LoginForm;
