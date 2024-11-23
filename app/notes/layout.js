import Sidebar from "@/components/layout/sidebar";

export default function NotesLayout({ children }) {
  return (
    <div className="flex h-screen max-width-100vw">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
