import { useCallback, useEffect } from "react";
import useDebounce from "./useDebounce";
import { getBackendUrl, handleIntegrationFunction } from "@/helper/integration";
import axios from "axios";
import { toast } from "react-hot-toast";

const useSaveNote = (noteId, setNoteId, title, payload, headerImage, delay) => {
  const debounceTitle = useDebounce(title, 500);
  const debouncePayload = useDebounce(payload, 500);

  const handleSave = useCallback(async () => {
    const backendUrl = getBackendUrl();

    if (noteId == null) {
      const { data } = await axios.post(
        `${backendUrl}/note`,
        {
          title: debounceTitle,
          payload: debouncePayload,
          image: headerImage,
        },
        { withCredentials: true }
      );
      setNoteId(data.note._id);
    } else {
      await axios.patch(
        `${backendUrl}/note/${noteId}`,
        {
          title: debounceTitle,
          payload: debouncePayload,
          image: headerImage,
        },
        { withCredentials: true }
      );
    }

    toast.success("Notes uploaded");
  }, [noteId, debounceTitle, debouncePayload, headerImage]);

  useEffect(() => {
    if (
      debounceTitle == undefined ||
      debounceTitle.trim() == "" ||
      debouncePayload == undefined
    )
      return;

    const onSave = handleIntegrationFunction(handleSave);
    onSave();
  }, [handleSave]);
};

export default useSaveNote;
