import { toast } from "react-hot-toast";

const toastIntegrationError = (err) => {
  const message = err.response.data.message || "Something went wrong";
  toast.error(message);
};

const getBackendUrl = () => {
  return process.env.NEXT_PUBLIC_PRODUCTION_BE;
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
