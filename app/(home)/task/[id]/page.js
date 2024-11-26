"use client";

import { getBackendUrl, handleIntegrationFunction } from "@/helper/integration";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const convertToLocalDatetime = (isoString) => {
  const date = new Date(isoString); // Parse the ISO string
  const pad = (num) => num.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Months are zero-based
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const TaskPage = () => {
  const router = useRouter();
  const params = useParams();
  const taskId = params.id;

  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [headerImage, setHeaderImage] = useState(null);

  const fetchTask = async () => {
    const backendUrl = getBackendUrl();
    const { data } = await axios.get(`${backendUrl}/task?id=${taskId}`, {
      withCredentials: true,
    });

    const task = data[0];
    setTitle(task.title);
    setHeaderImage(task.iamge);
    setDeadline(convertToLocalDatetime(task.deadline));
    setDescription(task.description);
    setStatus(task.status);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const updateHeaderImage = (result) => {
    setHeaderImage(result.info.url);
  };

  const postTask = async () => {
    const backendUrl = getBackendUrl();

    await axios.patch(`${backendUrl}/task/${taskId}`, {
      title,
      deadline,
      description,
      status,
      image: headerImage,
    });

    toast.success("Task created");

    setTimeout(() => router.replace("/home"), 1000);
  };

  const onSubmit = handleIntegrationFunction(postTask);

  return (
    <div className="container mx-auto">
      {/* Header Image Section */}
      <div className="relative mb-6 h-56 flex flex-col gap-y">
        <h1 className="absolute top-4 left-4 text-3xl font-bold mb-6 text-gray-700">
          Task List
        </h1>
        {headerImage ? (
          <img
            src={headerImage}
            alt="Header Image"
            className="w-full h-full object-cover rounded-t-lg"
          />
        ) : (
          <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-t-lg">
            <p className="text-gray-500">Upload a header image</p>
          </div>
        )}
        {/* Upload Image Button */}
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

      {/* Task Form */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2 text-gray-600 text-bold"
          placeholder="Title"
        />
        <input
          type="datetime-local"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="border p-2 w-full mb-2 text-gray-600"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full mb-2 text-gray-600"
          placeholder="Description"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 w-full mb-2 text-gray-600"
        >
          <option value="Pending">Pending</option>
          <option value="In-progress">In-progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          className="bg-brown text-white p-2 w-full mb-4"
          onClick={onSubmit}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskPage;
