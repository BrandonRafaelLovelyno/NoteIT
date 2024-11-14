"use client";

import LogoNavbar from "@/components/layout/logo-navbar";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { getNavbarTitle } from "@/helper/layout";

const AuthLayout = ({ children }) => {
  const pathName = usePathname();

  const navbarTitle = useMemo(() => {
    if (pathName) return getNavbarTitle(pathName);
  }, [pathName]);

  return (
    <div className={twMerge("w-full h-full")}>
      <div className={twMerge("absolute", "w-full h-fit", "top-0")}>
        <LogoNavbar title={navbarTitle} />
      </div>
      <Image
        src={"/right-blob.png"}
        alt="Right Blob"
        className={twMerge("absolute", "right-0 top-10")}
        width={700}
        height={700}
      />
      {children}
      <Image
        src={"/left-blob.png"}
        alt="Left Blob"
        className={twMerge("absolute", "left-0 bottom-0")}
        width={700}
        height={700}
      />
    </div>
  );
};

export default AuthLayout;
