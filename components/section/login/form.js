"use client";

import TextInput from "@/components/form/text-input";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { getBackendUrl, handleIntegrationFunction } from "@/helper/integration";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSession } from "@/components/provider/session-provider";
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
    placeholder: "Enter your password...",
    isPassword: true,
  },
];

const LoginForm = () => {
  const router = useRouter();
  const { updateSession } = useSession();

  const requestLogin = async (e) => {
    try {
      e.preventDefault();
      const backendUrl = getBackendUrl();

      const formData = new FormData(e.target);

      const email = formData.get("email");
      const password = formData.get("password");

      const { data } = await axios.post(
        `${backendUrl}/auth/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );

      console.log(data);

      toast.success(`Hello again, ${data.data.email}`);

      setTimeout(() => {
        router.push("/home");
      }, 1000);
    } catch (err) {
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
