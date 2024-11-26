import { getBackendUrl } from "@/helper/integration";
import axios from "axios";
import { EditorState, ContentState } from "draft-js";
import { useEffect } from "react";

const useFetchNote = (noteId, setTitle, setEditorState, setImage) => {
  const setEditorPlainText = (text) => {
    const contentState = ContentState.createFromText(text);
    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  };

  const fetchNote = async (noteId) => {
    const backendUrl = getBackendUrl();

    const { data } = await axios.get(`${backendUrl}/note`, {
      params: {
        id: noteId,
      },
    });

    const note = data[0];
    console.log("noteid", noteId);
    console.log("note", note);

    setTitle(note.title);
    setEditorPlainText(note.payload);
    setImage(note.image);
  };

  useEffect(() => {
    if (noteId == null) return;
    fetchNote();
  }, []);
};

export default useFetchNote;
