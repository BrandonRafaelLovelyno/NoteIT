import PrimaryButton from "@/components/form/button/primary";
import { twMerge } from "tailwind-merge";

export default function AccountPassword() {
  return (
    <div
      className={twMerge(
        "w-full",
        "flex flex-row justify-between items-center gap-x-7"
      )}
    >
      <div className={twMerge("flex flex-col gap-y-2")}>
        <p className={twMerge("font-semibold")}>Password</p>
        <p>
          This allows you to change your password to keep your personal
          information safe. Make sure your new password is strong and easy to
          remember.
        </p>
      </div>
      <div className={twMerge("w-fit")}>
        <PrimaryButton title="Change password" />
      </div>
    </div>
  );
}
