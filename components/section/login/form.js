"use client";

import TextInput from "@/components/form/text-input";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { getBackendUrl, handleIntegrationFunction } from "@/helper/integration";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSession } from "@/components/provider/session-provider";

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
  },
];

const LoginForm = () => {
  const { updateSession } = useSession();

  const requestLogin = async (e) => {
    try {
      e.preventDefault();
      const backendUrl = getBackendUrl();

      const formObject = new FormData(e.target);

      // Convert FormData to a regular object
      const formValues = Object.fromEntries(formObject.entries());

      console.log("Form submitted:", formValues);

      // TODO GABRIEL: Integrate login with cookie
      const { data } = await axios.post(
        `${backendUrl}/auth/login`,
        formObject,
        {
          withCredentials: true,
        }
      );

      updateSession(data.user);
    } catch (err) {
      // TODO GABRIEL: Display proper error message
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <form
      onSubmit={requestLogin}
      className={twMerge("flex flex-col items-center gap-y-8")}
    >
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
        Login
      </button>
    </form>
  );
};

export default LoginForm;
