"use client";

import { useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  Modifier,
  convertToRaw,
} from "draft-js";
import "draft-js/dist/Draft.css"; // Styles for the editor

export default function NotesEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize editor state
  const [savedNotes, setSavedNotes] = useState([]); // State for saved notes
  const [headerImage, setHeaderImage] = useState(null); // State for the header image

  // Block styling logic
  const blockStyleFn = (contentBlock) => {
    const blockKey = contentBlock.getKey();
    const firstBlockKey = editorState.getCurrentContent().getFirstBlock().getKey();

    // Style the first block as the title
    if (blockKey === firstBlockKey) {
      return "text-2xl font-bold text-gray-800 border-b pb-1 mb-2";
    }

    return "text-base text-gray-600 mt-2"; // Style for body content
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setHeaderImage(reader.result); // Convert file to Base64 string
      reader.readAsDataURL(file);
    }
  };

  // Function to save notes
  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState); // Get raw content
    const contentText = contentState.getPlainText(); // Get plain text from editor

    if (contentText.trim() === "") {
      return alert("Note cannot be empty!");
    }

    // Split the first line as the header and the rest as the note content
    const [header, ...content] = contentText.split("\n");
    if (!header.trim()) {
      return alert("Header text cannot be empty!");
    }

    const noteWithHeader = {
      header: header.trim(),
      text: content.join("\n").trim(),
      image: headerImage,
    };

    setSavedNotes([...savedNotes, noteWithHeader]); // Save note with header
    setEditorState(EditorState.createEmpty()); // Clear editor
    setHeaderImage(null); // Clear header image
  };

  return (
    <div className="p-0 mx-auto rounded-md">
      {/* Image Header Section */}
      <div className="relative bg-gray-200 h-48 flex items-center justify-center rounded">
        <h1 className="absolute top-4 left-4 text-3xl font-bold mb-6 text-gray-700">New Page</h1>
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

      {/* Draft.js Editor for notes */}
      <div className="p-10 border border-gray-300 rounded-lg shadow-sm">
        <Editor
          editorState={editorState}
          onChange={setEditorState} // Update editor state
          blockStyleFn={blockStyleFn} // Apply block styles
          placeholder="Heading"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSave}
          className="bg-[#102C57] text-white px-4 py-2 rounded"
        >
          Save Note
        </button>
      </div>

      {/* Display Saved Notes */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Saved Notes
        </h2>
        <div className="flex flex-col items-center mt-4">
          {savedNotes.length === 0 ? (
            <p className="text-gray-500">No notes saved yet.</p>
          ) : (
            <ul className="w-full max-w-md">
              {savedNotes.map((note, index) => (
                <li key={index} className="mb-6 border-b pb-4">
                  {/* Display Header Text */}
                  {note.header && (
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {note.header}
                    </h3>
                  )}

                  {/* Display Header Image */}
                  {note.image && (
                    <div className="bg-gray-200 h-32 rounded mb-2">
                      <img
                        src={note.image}
                        alt="Saved Header"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}

                  {/* Display Note Content */}
                  <p className="text-gray-700 whitespace-pre-line">{note.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
