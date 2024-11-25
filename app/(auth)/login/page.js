import GoogleButton from "@/components/form/button/google-button";
import CenterContainer from "@/components/layout/container/center-container";
import Divider from "@/components/layout/divider";
import LoginForm from "@/components/section/login/form";
import LoginHeader from "@/components/section/login/header";
import { twMerge } from "tailwind-merge";

const loginUser = () => {
  return (
    <CenterContainer>
      <div className={twMerge("w-fit h-fit", "flex flex-col gap-y-6")}>
        <div className={twMerge("w-full", "flex flex-col gap-y-5")}>
          <LoginHeader />

          <GoogleButton title="Continue with Google" />
        </div>
        <Divider title="Or" />
        <LoginForm />
      </div>
    </CenterContainer>
  )

}

export default loginUser