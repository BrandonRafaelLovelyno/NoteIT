"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Searchbar({ query, setQuery, placeholder }) {
  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div
      className={twMerge(
        "w-full",
        "flex flex-row gap-x-3 items-center",
        "p-2",
        "border-2 border-black",
        "rounded-lg",
        "text-black"
      )}
    >
      <div className={twMerge("relative", "w-8 h-8")}>
        <Image
          src={"/search.png"}
          className={twMerge("absolute")}
          fill={true}
          alt="Search Icon"
        />
      </div>
      <input
        type="text"
        placeholder={placeholder || "Type to search..."}
        value={query}
        onChange={onQueryChange}
        aria-label="Search"
        className={twMerge(
          "w-full",
          "focus:outline-none focus:ring-0",
          "text-xl"
        )}
      />
    </div>
  );
}
