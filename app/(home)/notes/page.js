"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getBackendUrl } from "@/helper/integration";
import axios from "axios";

export default function MakeNotesPage() {
  const router = useRouter();

  useEffect(() => {
    const makeNote = async () => {
      const backendUrl = getBackendUrl();
      const { data } = await axios.post(
        `${backendUrl}/note`,
        {
          title: "New Note",
        },
        { withCredentials: true }
      );

      const noteId = data.note._id;

      // Redirect to the new note page
      router.push(`/notes/${noteId}`);
    };

    makeNote();
  }, [router]);

  return <div className="text-black">Creating note...</div>; // Show a loading state or placeholder
}
