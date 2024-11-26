"use client";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

const NotesEditor = dynamic(() => import("/components/notes/noteseditor"), {
  ssr: false,
});

export default function NotesPage() {
  const params = useParams();
  const noteId = params.id;

  return (
    <div>
      <NotesEditor noteId={noteId} key={noteId} />
    </div>
  );
}
