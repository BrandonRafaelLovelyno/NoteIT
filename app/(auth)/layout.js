const { default: Image } = require("next/image");
const { twMerge } = require("tailwind-merge");

const AuthLayout = ({ children }) => {
  return (
    <div className={twMerge("w-full h-full")}>
      <Image
        src={"/right-blob.png"}
        alt="Right Blob"
        className={twMerge("absolute", "right-0 top-10")}
        width={700}
        height={700}
      />
      {children}
      <Image
        src={"/left-blob.png"}
        alt="Left Blob"
        className={twMerge("absolute", "left-0 bottom-0")}
        width={700}
        height={700}
      />
    </div>
  );
};

export default AuthLayout;
