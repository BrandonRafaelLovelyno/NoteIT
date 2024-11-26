"use client";

import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css"; // Styles for the editor
import { twMerge } from "tailwind-merge";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-hot-toast";
import axios from "axios";
import { getBackendUrl, handleIntegrationFunction } from "@/helper/integration";

export default function NotesEditor() {
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Initialize editor state
  const [headerImage, setHeaderImage] = useState(null); // State for the header image

  // Block styling logic
  const blockStyleFn = (contentBlock) => {
    const blockKey = contentBlock.getKey();
    const firstBlockKey = editorState
      .getCurrentContent()
      .getFirstBlock()
      .getKey();

    // Style the first block as the title
    if (blockKey === firstBlockKey) {
      return "text-2xl font-bold text-gray-800 border-b pb-1 mb-2";
    }

    return "text-base text-gray-600 mt-2"; // Style for body content
  };

  // Handle image upload
  const getCloudinaryUrl = (result) => {
    setHeaderImage(result.info.url);
  };

  const getPayload = () => {
    const contentState = editorState.getCurrentContent();
    return contentState.getPlainText();
  };

  // Function to save notes
  const handleSave = async () => {
    const payload = getPayload();

    const backendUrl = getBackendUrl();
    await axios.post(
      `${backendUrl}/note`,
      { title, payload, image: headerImage },
      { withCredentials: true }
    );

    toast.success("Notes uploaded");
  };

  const onSave = handleIntegrationFunction(handleSave);

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
        <CldUploadWidget uploadPreset="ml_default" onSuccess={getCloudinaryUrl}>
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
          blockStyleFn={blockStyleFn} // Apply block styles
          placeholder="Heading"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={async () => {
            await onSave();
          }}
          className="bg-[#102C57] text-white px-4 py-2 rounded"
        >
          Save Note
        </button>
      </div>
    </div>
  );
}
