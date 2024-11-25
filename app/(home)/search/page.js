"use client";

import NoLineTitleSection from "@/components/layout/container/titled-section/noline";
import Searchbar from "@/components/searchbar";
import SearchResult from "@/components/section/search/result";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const RECENT_SEARCH_RESULTS = [
  {
    title: "Getting Started to use blender accoung",
    image: "/email.png",
  },
  {
    title: "Upcoming due dates about my programming week",
    image: "/notes.png",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className={twMerge("w-full h-full", "flex flex-col gap-y-16")}>
      <Searchbar
        query={query}
        setQuery={setQuery}
        placeholder="Search your projects or notes here..."
      />
      <div className={twMerge("w-full h-full", "flex flex-col gap-y-12")}>
        <SearchResult title="Recent Search" results={RECENT_SEARCH_RESULTS} />
        <SearchResult title="Older Results" results={RECENT_SEARCH_RESULTS} />
      </div>
    </div>
  );
}
