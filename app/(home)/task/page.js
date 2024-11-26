import { getBackendUrl } from "@/helper/integration";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function MakeTaskPage() {
  const makeTask = async () => {
    const backendUrl = getBackendUrl();
    const { data } = await axios.post(
      `${backendUrl}/task`,
      {
        title: "New Task",
        deadline: Date.now(),
      },
      { withCredentials: true }
    );
    return data.task._id;
  };

  const taskId = await makeTask();

  return redirect(`/task/${taskId}`);
}
