import { twMerge } from "tailwind-merge";

export default function LinedTitleSection({ title, children }) {
  return (
    <section
      className={twMerge(
        "w-full h-fit",
        "flex flex-col gap-y-5 items-start",
        "text-black"
      )}
    >
      <div className={twMerge("w-full", "flex flex-col gap-y-3 items-start")}>
        <h2 className={twMerge("text-lg")}>{title}</h2>
        <div className={twMerge("w-full h-[2px]", "bg-gray-300")} />
      </div>
      <div className={twMerge("w-full", "pl-5")}>{children}</div>
    </section>
  );
}
