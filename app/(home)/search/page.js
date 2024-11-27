"use client";

import Searchbar from "@/components/searchbar";
import SearchResult from "@/components/section/search/result";
import { getBackendUrl } from "@/helper/integration";
import useDebounce from "@/hook/useDebounce";
import axios from "axios";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

function mergeAndSortByUpdatedAt(list1, list2) {
  const combinedList = [...list1, ...list2];

  combinedList.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return combinedList;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const [recent, setRecent] = useState([]);
  const [older, setOlder] = useState([]);

  const fetchRecent = async () => {
    const backendUrl = getBackendUrl();

    const { data: notes } = await axios.get(
      `${backendUrl}/note?title=${query}`,
      {
        withCredentials: true,
      }
    );
    const { data: tasks } = await axios.get(
      `${backendUrl}/task?title=${query}`,
      {
        withCredentials: true,
      }
    );

    const sortedResult = mergeAndSortByUpdatedAt(notes, tasks);
    setRecent(sortedResult.slice(0, 3));
    setOlder(sortedResult.slice(3));
  };

  useEffect(() => {
    fetchRecent();
  }, [debouncedQuery]);

  return (
    <div className={twMerge("w-full h-full", "flex flex-col gap-y-16")}>
      <Searchbar
        query={query}
        setQuery={setQuery}
        placeholder="Search your projects or notes here..."
      />
      <div className={twMerge("w-full h-full", "flex flex-col gap-y-12")}>
        <SearchResult title="Recent Search" results={recent} />
        <SearchResult title="Older Results" results={older} />
      </div>
    </div>
  );
}
