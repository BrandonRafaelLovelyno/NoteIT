"use client";

import Sidebar from "@/components/layout/sidebar";
import { useSession } from "@/components/provider/session-provider";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

export default function HomeLayout({ children }) {
  const router = useRouter();

  const { session, isLoading } = useSession();

  const body = useMemo(() => {
    if (isLoading) {
      return <div />;
    } else {
      if (!session?.userId) {
        return router.push("/");
      }
      return (
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      );
    }
  }, [isLoading, session]);

  return body;
}
