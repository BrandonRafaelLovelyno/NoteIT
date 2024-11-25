import NoLineTitleSection from "@/components/layout/container/titled-section/noline";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function SearchResult({ title, results }) {
  return (
    <NoLineTitleSection title={title}>
      <div className={twMerge("flex flex-col gap-y-3")}>
        {results.map((res, idx) => (
          <div
            key={idx}
            className={twMerge(
              "w-full",
              "flex flex-row gap-x-5 items-center justify-start"
            )}
          >
            <div className={twMerge("relative", "w-8 h-8")}>
              <Image src={res.image} alt={res.title} fill={true} />
            </div>
            <p className={twMerge("text-black font-semibold")}>{res.title}</p>
          </div>
        ))}
      </div>
    </NoLineTitleSection>
  );
}
