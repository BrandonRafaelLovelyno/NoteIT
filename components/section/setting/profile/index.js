"use client";

import LinedTitleSection from "@/components/layout/container/titled-section/lined";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ProfilePicture from "./picture";
import PrimaryButton from "@/components/form/button/primary";

export default function SettingProfile() {
  const [profileImage, setProfileImage] = useState();

  return (
    <LinedTitleSection title="My Profiles">
      <div className={twMerge("w-full", "flex flex-col gap-y-8")}>
        <div className={twMerge("flex flex-row gap-x-10")}>
          <ProfilePicture
            profileImage={profileImage}
            setProfileImage={setProfileImage}
          />
          <p className={twMerge("font-semibold mt-3")}>Nickname</p>
        </div>
        <div className={twMerge("w-fit", "ml-auto")}>
          <PrimaryButton title="Save" />
        </div>
      </div>
    </LinedTitleSection>
  );
}
