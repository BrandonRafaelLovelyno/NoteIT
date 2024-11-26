"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getBackendUrl } from "@/helper/integration";
import axios from "axios";

export default function MakeTaskPage() {
  const router = useRouter();

  useEffect(() => {
    const makeTask = async () => {
      const backendUrl = getBackendUrl();
      const { data } = await axios.post(
        `${backendUrl}/task`,
        {
          title: "New Task",
          deadline: Date.now(),
        },
        { withCredentials: true }
      );

      const taskId = data.task._id;

      // Redirect to the new note page
      router.push(`/task/${taskId}`);
    };

    makeTask();
  }, [router]);

  return <div className="text-black">Creating task...</div>; // Show a loading state or placeholder
}
