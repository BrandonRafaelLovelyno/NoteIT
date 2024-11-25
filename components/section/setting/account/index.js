import LinedTitleSection from "@/components/layout/container/titled-section/lined";
import { twMerge } from "tailwind-merge";
import AccountEmail from "./email";
import AccountPassword from "./password";

export default function SettingAccount() {
  return (
    <LinedTitleSection title="My Account">
      <div className={twMerge("w-full", "flex flex-col gap-y-5")}>
        <AccountEmail />
        <AccountPassword />
      </div>
    </LinedTitleSection>
  );
}
