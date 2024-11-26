"use client";

import { useState } from "react";
import {
  Editor,
  EditorState,
  ContentState,
  Modifier,
  convertToRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";

export default function NotesEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [savedNotes, setSavedNotes] = useState([]);
  const [headerImage, setHeaderImage] = useState(null);
  const [noteHeading, setNoteHeading] = useState("New Page");

  const blockStyleFn = () => "text-base text-gray-600 mt-2";

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setHeaderImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const contentText = contentState.getPlainText();
    if (contentText.trim() === "") return alert("Note cannot be empty!");
    if (!noteHeading.trim()) return alert("Heading cannot be empty!");

    const noteWithHeader = {
      header: noteHeading.trim(),
      text: contentText.trim(),
      image: headerImage,
    };

    setSavedNotes([...savedNotes, noteWithHeader]);
    setEditorState(EditorState.createEmpty());
    setHeaderImage(null);
    setNoteHeading("Title");
  };

  return (
    <div className="p-0 mx-auto rounded-md">
      <div className="relative bg-gray-200 h-48 flex items-center justify-center rounded">
        <input
          type="text"
          value={noteHeading}
          onChange={(e) => setNoteHeading(e.target.value)}
          className="absolute top-4 left-4 text-3xl font-bold mb-6 text-gray-700 bg-transparent outline-none"
        />
        {headerImage ? (
          <img
            src={headerImage}
            alt="Header"
            className="w-full h-full object-cover rounded"
          />
        ) : (
          <p className="text-gray-500">Upload a header image</p>
        )}
        <label className="absolute bottom-2 right-2 bg-blue-500 text-gray-500 p-2 rounded-full cursor-pointer hover:bg-blue-600">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          📤 Upload Image
        </label>
      </div>
      <div className="p-10 border border-gray-300 rounded-lg shadow-sm">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          blockStyleFn={blockStyleFn}
          placeholder="Write your note here..."
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSave}
          className="bg-[#102C57] text-white px-4 py-2 rounded"
        >
          Save Note
        </button>
      </div>
    </div>
  );
}
