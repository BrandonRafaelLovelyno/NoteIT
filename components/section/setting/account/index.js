import TitledSection from "@/components/layout/titled-section";
import { twMerge } from "tailwind-merge";
import AccountEmail from "./email";
import AccountPassword from "./password";

export default function SettingAccount() {
  return (
    <TitledSection title="My Account">
      <div className={twMerge("w-full", "flex flex-col gap-y-5")}>
        <AccountEmail />
        <AccountPassword />
      </div>
    </TitledSection>
  );
}
