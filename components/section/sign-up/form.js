"use client";

import PrimaryButton from "@/components/form/button/primary";
import TextInput from "@/components/form/text-input";
import { getBackendUrl } from "@/helper/integration";
import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const INPUTS = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email address...",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Type your password...",
    isPassword: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password...",
    isPassword: true,
  },
];

const SignUpForm = () => {
  const router = useRouter();

  const createAccount = async (e) => {
    try {
      e.preventDefault();
      const backendUrl = getBackendUrl();

      const formData = new FormData(e.target);
      const email = formData.get("email");
      const password = formData.get("password");
      const passwordConfirmation = formData.get("confirmPassword");

      if (password != passwordConfirmation)
        throw new Error("Password does not match");

      await axios.post(
        `${backendUrl}/auth/signup`,
        { email, password },
        {
          withCredentials: true,
        }
      );

      toast.success("Account created. Please login with the account");

      setTimeout(() => {
        router.replace("/login");
      }, 1000);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form
      className={twMerge("flex flex-col items-center gap-y-8")}
      onSubmit={createAccount}
    >
      <div className={twMerge("flex flex-col gap-y-3", "tracking-wider")}>
        {INPUTS.map((input) => (
          <TextInput key={input.name} {...input} />
        ))}
      </div>
      <PrimaryButton title="Register" />
    </form>
  );
};

export default SignUpForm;
