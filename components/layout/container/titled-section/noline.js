import { twMerge } from "tailwind-merge";

export default function NoLineTitleSection({ title, children }) {
  return (
    <section
      className={twMerge(
        "w-full h-fit",
        "flex flex-col gap-y-5 items-start",
        "text-gray-500"
      )}
    >
      <h2 className={twMerge("text-lg font-bold")}>{title}</h2>
      <div className={twMerge("w-full", "pl-5")}>{children}</div>
    </section>
  );
}
