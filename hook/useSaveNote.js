import { useCallback, useEffect } from "react";
import useDebounce from "./useDebounce";
import { getBackendUrl, handleIntegrationFunction } from "@/helper/integration";
import axios from "axios";

const useSaveNote = (noteId, isNoteFetched, title, payload, headerImage) => {
  const debounceTitle = useDebounce(title, 500);
  const debouncePayload = useDebounce(payload, 500);

  const handleSave = useCallback(async () => {
    const backendUrl = getBackendUrl();

    await axios.patch(
      `${backendUrl}/note/${noteId}`,
      {
        title: debounceTitle,
        payload: debouncePayload,
        image: headerImage,
      },
      { withCredentials: true }
    );
  }, [debounceTitle, debouncePayload, headerImage, isNoteFetched]);

  useEffect(() => {
    if (!isNoteFetched) return;
    if (!debounceTitle) return;

    const onSave = handleIntegrationFunction(handleSave);
    onSave();
  }, [isNoteFetched, handleSave]);
};

export default useSaveNote;
