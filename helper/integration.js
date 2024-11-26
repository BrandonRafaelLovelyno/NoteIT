import { toast } from "react-hot-toast";

const toastIntegrationError = (err) => {
  const message = err.response.data.message || "Something went wrong";
  toast.error(message);
};

const getBackendUrl = () => {
  let backendUrl;

  const isLocal = process.env.NODE_ENV == "development";

  if (isLocal) {
    backendUrl = process.env.NEXT_PUBLIC_LOCAL_BE;
  } else {
    backendUrl = process.env.NEXT_PUBLIC_PRODUCTION_BE;
  }

  return backendUrl;
};

const handleIntegrationFunction = (fn) => async () => {
  try {
    await fn();
  } catch (err) {
    console.log(err);
    toastIntegrationError(err);
  }
};

export { handleIntegrationFunction, getBackendUrl };
