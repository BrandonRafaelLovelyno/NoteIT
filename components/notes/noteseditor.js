"use client";

import { useEffect, useMemo, useState } from "react";
import { ContentState, Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css"; // Styles for the editor
import { twMerge } from "tailwind-merge";
import { CldUploadWidget } from "next-cloudinary";
import useSaveNote from "@/hook/useSaveNote";
import axios from "axios";
import { getBackendUrl } from "@/helper/integration";

export default function NotesEditor({ noteId }) {
  const [isNoteFetched, setIsNoteFetched] = useState(false);

  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize editor state
  const [headerImage, setHeaderImage] = useState(null); // State for the header image

  const getPayload = () => {
    const contentState = editorState.getCurrentContent();
    return contentState.getPlainText();
  };
  const setPayload = (text) => {
    if (!text) return;

    const contentState = ContentState.createFromText(text);
    const newEditorState = EditorState.createWithContent(contentState);
    setEditorState(newEditorState);
  };
  const payload = useMemo(() => getPayload(), [editorState]);

  // Handle image upload
  const updateHeaderImage = (result) => {
    setHeaderImage(result.info.url);
  };

  const fetchNote = async () => {
    const backendUrl = getBackendUrl();
    const { data } = await axios.get(`${backendUrl}/note?id=${noteId}`, {
      withCredentials: true,
    });

    const note = data[0];
    setTitle(note.title);
    setPayload(note.payload);
    setHeaderImage(note.image);

    setIsNoteFetched(true);
  };

  useEffect(() => {
    fetchNote();
  }, []);

  useSaveNote(noteId, isNoteFetched, title, payload, headerImage, 1500);

  return (
    <div className="p-0 mx-auto rounded-md">
      {/* Image Header Section */}
      <div className="relative bg-gray-200 h-48 flex items-center justify-center rounded">
        {headerImage ? (
          <img
            src={headerImage}
            alt="Header"
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <p className="text-gray-500">Upload a header image</p>
        )}

        {/* Upload Image Button */}
        <CldUploadWidget
          uploadPreset="ml_default"
          onSuccess={updateHeaderImage}
        >
          {({ open }) => {
            return (
              <label
                className="absolute bottom-2 right-2 bg-blue-500 text-gray-500 p-2 rounded-full cursor-pointer hover:bg-blue-600"
                onClick={() => open()}
              >
                📤 Upload Image
              </label>
            );
          }}
        </CldUploadWidget>
      </div>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Page"
        className={twMerge(
          "my-5",
          "bg-transparent",
          "text-4xl text-black placeholder:text-4xl",
          "focus:outline-none focus:ring-0"
        )}
      />

      {/* Draft.js Editor for notes */}
      <div className="p-10 border border-gray-300 rounded-lg shadow-sm">
        <Editor
          editorState={editorState}
          onChange={setEditorState} // Update editor state
          blockStyleFn={() => "text-base text-gray-600 mt-2"} // Apply block styles
          placeholder="Take notes..."
        />
      </div>
    </div>
  );
}
