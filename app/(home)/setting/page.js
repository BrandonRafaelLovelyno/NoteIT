import Divider from "@/components/layout/divider";
import LinedTitleSection from "@/components/layout/container/titled-section/lined";
import SettingAccount from "@/components/section/setting/account";
import SettingProfile from "@/components/section/setting/profile";
import { twMerge } from "tailwind-merge";

export default function SettingPage() {
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "flex flex-col gap-y-10",
        "text-black"
      )}
    >
      <SettingProfile />
      <SettingAccount />
    </div>
  );
}
