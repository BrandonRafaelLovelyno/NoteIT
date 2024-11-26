"use client";

import PrimaryButton from "@/components/form/button/primary";
import { useSession } from "@/components/provider/session-provider";
import { twMerge } from "tailwind-merge";

export default function AccountEmail() {
  const { session } = useSession();

  return (
    <div
      className={twMerge(
        "w-full",
        "flex flex-row justify-between items-center gap-x-7"
      )}
    >
      <div className={twMerge("flex flex-col gap-y-2")}>
        <p className={twMerge("font-semibold")}>Email</p>
        {/* TODO GABRIEL: CHECK IF SESSION IS IMPLEMENTED */}
        <p>{session.user.email}</p>
      </div>
      <div className={twMerge("w-fit")}>
        <PrimaryButton title="Change email" />
      </div>
    </div>
  );
}
