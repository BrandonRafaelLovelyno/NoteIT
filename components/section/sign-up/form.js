import PrimaryButton from "@/components/form/button/primary";
import TextInput from "@/components/form/text-input";
import { getBackendUrl } from "@/helper/integration";
import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";

const INPUTS = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter your name...",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email address...",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Type your password...",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password...",
  },
];

const SignUpForm = () => {
  const createAccount = async (e) => {
    try {
      e.preventDefault();
      const backendUrl = getBackendUrl();

      const formObject = new FormData(e.target);

      // Convert FormData to a regular object
      const formValues = Object.fromEntries(formObject.entries());

      console.log("Form submitted:", formValues);

      // TODO GABRIEL: Create account
      const { data } = await axios.post(
        `${backendUrl}/auth/sign-up`,
        formObject,
        {
          withCredentials: true,
        }
      );

      updateSession(data.user);
    } catch (err) {
      // TODO GABRIEL: Display proper error message
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <form
      className={twMerge("flex flex-col items-center gap-y-8")}
      onSubmit={createAccount}
    >
      <div className={twMerge("flex flex-col gap-y-3", "tracking-wider")}>
        {INPUTS.map((input) => (
          <TextInput key={input.name} {...input} />
        ))}
      </div>
      <PrimaryButton title="Register" />
    </form>
  );
};

export default SignUpForm;
