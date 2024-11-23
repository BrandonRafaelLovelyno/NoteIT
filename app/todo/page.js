"use client";

import { useState, useEffect } from "react";

const ToDo = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);  // Image state for to-do items
  const [status, setStatus] = useState("Pending");
  const [todos, setTodos] = useState([]);
  const [headerImage, setHeaderImage] = useState(null);  // State for the header image

  // Handle image upload for header image
  const handleHeaderImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHeaderImage(URL.createObjectURL(file)); // Display the header image
    }
  };

  // Handle image upload for to-do item image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));  // Create an object URL for the uploaded image
    }
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (title.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        deadline,
        image,
        status,
      };
      setTodos([...todos, newTask]);
      // Reset form fields after adding task
      setTitle("");
      setDeadline("");
      setDescription("");
      setImage(null);
      setStatus("Pending");
    }
  };

  // Retrieve saved tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos)); // Load saved tasks from localStorage
    }
  }, []);

  const handleDeleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    ));
  };

  return (
    <div className="container mx-auto">
      {/* Header Image Section */}
      <div className="relative mb-6">
        <h1 className="absolute top-4 left-4 text-3xl font-bold mb-6 text-gray-700">To-Do List</h1>
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
        <label className="absolute bottom-2 right-2 bg-blue-500 text-gray-500 p-2 rounded-full cursor-pointer hover:bg-blue-600">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleHeaderImageUpload}
          />
          📤 Upload Image
        </label>
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
          <option value="Completed">Completed</option>
        </select>
        <button
          onClick={handleAddTask}
          className="bg-brown text-white p-2 w-full mb-4"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="max-w-xl mx-auto">
        <ul className="list-disc pl-6 mt-6">
            {todos.map((todo) => (
            <li key={todo.id} className="flex flex-col border-b py-4">
                <h2 className="text-xl text-gray-900 font-semibold">{todo.title}</h2>
                <p className="text-gray-600">Deadline: {todo.deadline}</p>
                <p className="text-gray-600">Description: {todo.description}</p>
                <p className="mt-2 text-gray-600">
                Status:{" "}
                <span className={todo.status === "Completed" ? "text-green-500" : "text-yellow-500"}>
                    {todo.status}
                </span>
                </p>
                {/* Status Selection */}
                <div className="flex mt-2 text-gray-700">
                <select
                    value={todo.status}
                    onChange={(e) => handleStatusChange(todo.id, e.target.value)}
                    className="border p-2 rounded w-40"
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
                <button
                    onClick={() => handleDeleteTask(todo.id)}
                    className="bg-red-500 text-white p-2 rounded ml-2"
                >
                    Delete Task
                </button>
                </div>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
