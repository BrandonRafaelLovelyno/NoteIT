import { twMerge } from "tailwind-merge";

const LoginHeader = () => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-y-1",
        "text-blue text-xl font-semibold"
      )}
    >
      <h1>Your Goals, One Step Closer.</h1>
      <h1>Log in to make your NoteIT progress!</h1>
    </div>
  );
};

export default LoginHeader;
