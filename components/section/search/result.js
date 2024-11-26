import NoLineTitleSection from "@/components/layout/container/titled-section/noline";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { FaTasks } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";
import Link from "next/link";

export default function SearchResult({ title, results }) {
  return (
    <NoLineTitleSection title={title}>
      <div className={twMerge("flex flex-col gap-y-3")}>
        {results.map((res, idx) => {
          const isTask = !!res.deadline;

          return (
            <Link
              key={idx}
              href={isTask ? `/task/${res._id}` : `/notes/${res._id}`}
            >
              <div
                className={twMerge(
                  "w-full",
                  "flex flex-row gap-x-5 items-center justify-start"
                )}
              >
                {isTask ? (
                  <FaTasks className="text-black h-5 w-5" />
                ) : (
                  <FaRegStickyNote className="text-black h-6 w-6" />
                )}
                <p className={twMerge("text-black font-semibold")}>
                  {res.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </NoLineTitleSection>
  );
}
