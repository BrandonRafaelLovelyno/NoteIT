import PrimaryButton from "@/components/form/button/primary";
import { twMerge } from "tailwind-merge";

export default function AccountEmail() {
  return (
    <div
      className={twMerge(
        "w-full",
        "flex flex-row justify-between items-center gap-x-7"
      )}
    >
      <div className={twMerge("flex flex-col gap-y-2")}>
        <p className={twMerge("font-semibold")}>Email</p>
        <p>admin@admin.co.id</p>
      </div>
      <div className={twMerge("w-fit")}>
        <PrimaryButton title="Change email" />
      </div>
    </div>
  );
}
