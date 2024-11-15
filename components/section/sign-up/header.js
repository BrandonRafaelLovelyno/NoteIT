import { twMerge } from "tailwind-merge";

const SignUpHeader = () => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-y-1",
        "text-blue text-xl font-semibold"
      )}
    >
      <h1>Create. Capture. Achieve.</h1>
      <h1>Register to unlock your NoteIT journey!</h1>
    </div>
  );
};

export default SignUpHeader;
