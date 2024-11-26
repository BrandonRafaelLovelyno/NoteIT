"use client";

import { getBackendUrl, handleIntegrationFunction } from "@/helper/integration";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const GoogleButton = ({ title }) => {
  const router = useRouter();

  const loginGoogle = async () => {
    const backendURL = getBackendUrl();
    const { data } = await axios.get(`${backendURL}/auth/google`);
    const authorizationUrl = data.url;

    router.replace(authorizationUrl);
  };

  const onClick = () => handleIntegrationFunction(loginGoogle);

  return (
    <button
      className={twMerge(
        "w-full",
        "flex flex-row justify-center items-center gap-x-2",
        "py-1",
        "border-2 border-blue rounded-lg",
        "font-medium text-lg text-blue"
      )}
      onClick={onClick}
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
