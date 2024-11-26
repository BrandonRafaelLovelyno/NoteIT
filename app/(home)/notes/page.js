"use client";
import dynamic from "next/dynamic";

const NotesEditor = dynamic(() => import("/components/notes/noteseditor"), {
  ssr: false,
});

export default function NotesPage() {
  return (
    <div>
      <NotesEditor />
    </div>
  );
}
