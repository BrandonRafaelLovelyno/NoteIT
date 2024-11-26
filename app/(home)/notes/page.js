import { getBackendUrl } from "@/helper/integration";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function MakeNotesPage() {
  const makeNote = async () => {
    const backendUrl = getBackendUrl();
    const { data } = await axios.post(
      `${backendUrl}/note`,
      {
        title: "New Note",
      },
      { withCredentials: true }
    );
    return data.note._id;
  };

  const noteId = await makeNote();

  return redirect(`/note/${noteId}`);
}
