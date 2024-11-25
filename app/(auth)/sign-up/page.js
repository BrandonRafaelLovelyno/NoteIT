import GoogleButton from "@/components/form/button/google-button";
import CenterContainer from "@/components/layout/container/center-container";
import Divider from "@/components/layout/divider";
import SignUpForm from "@/components/section/sign-up/form";
import SignUpHeader from "@/components/section/sign-up/header";
import { twMerge } from "tailwind-merge";

const SignUp = () => {
  return (
    <CenterContainer>
      <div className={twMerge("w-fit h-fit", "flex flex-col gap-y-6")}>
        <div className={twMerge("w-full", "flex flex-col gap-y-5")}>
          <SignUpHeader />

          <GoogleButton title="Continue with Google" />
        </div>
        <Divider title="Or" />
        <SignUpForm />
      </div>
    </CenterContainer>
  );
};

export default SignUp;
