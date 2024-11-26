import Sidebar from "@/components/layout/sidebar";
import { getBackendUrl } from "@/helper/integration";
import { redirect } from "next/navigation";

export default async function HomeLayout({ children }) {
  const fetchSession = async () => {
    try {
      const backendUrl = getBackendUrl();

      await axios.get(`${backendUrl}/auth/session`, {
        withCredentials: true,
      });
    } catch (err) {
      return redirect("/");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
