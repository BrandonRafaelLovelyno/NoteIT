"use client";

import { getBackendUrl } from "@/helper/integration";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [notes, setNotes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const menuItems = [
    { name: "Home", href: "/home", icon: "🏠" },
    { name: "Search", href: "/search", icon: "🔍" },
    { name: "Setting", href: "/setting", icon: "⚙️" },
  ];

  const fetchTask = async () => {
    const backendUrl = getBackendUrl();
    const { data } = await axios.get(`${backendUrl}/task`, {
      withCredentials: true,
    });
    setTasks(data);
  };

  const fetchNote = async () => {
    const backendUrl = getBackendUrl();
    const { data } = await axios.get(`${backendUrl}/note`, {
      withCredentials: true,
    });
    setNotes(data);
  };

  useEffect(() => {
    fetchNote();
    fetchTask();
  }, []);

  // Adjust sidebar based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false); // Collapse on small screens
      } else {
        setIsExpanded(true); // Expand on large screens
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle key press for sidebar toggle (for accessibility)
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav
        className={`transition-all duration-300 ${
          isExpanded ? "w-64" : "w-20"
        } bg-[#102C57] text-white flex flex-col p-6 overflow-auto pb-20`}
      >
        <div className="mb-8 flex justify-between items-center">
          <h2
            className={`text-xl font-semibold tracking-wide ${
              isExpanded ? "" : "hidden"
            }`}
          >
            User's NoteIT
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            onKeyUp={handleKeyPress}
            className="text-white"
            aria-label="Toggle Sidebar"
          >
            {isExpanded ? "←" : "→"}
          </button>
        </div>

        <ul
          className={`space-y-4 flex-1 ${
            isExpanded ? "" : "flex flex-col justify-center items-center"
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className={`${!isExpanded ? "text-center" : ""}`}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#091c38] transition-colors"
              >
                <span className="text-lg">{item.icon}</span>
                {isExpanded && <span className="text-sm">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-3">
            <h3
              className={`text-sm font-semibold ${isExpanded ? "" : "hidden"}`}
            >
              My Notes
            </h3>
            <div
              className={`flex justify-center items-center ${
                !isExpanded ? "w-full" : ""
              }`}
            >
              <Link
                href="/notes"
                className="text-blue-500 bg-white p-2 rounded-full shadow-md hover:bg-[#091c38] transition"
                aria-label="Add new note"
              >
                ➕
              </Link>
            </div>
          </div>
          <ul
            className={`space-y-2 ${
              !isExpanded ? "flex flex-col justify-center items-center" : ""
            }`}
          >
            {notes.map((note, index) => (
              <li key={index} className={`${!isExpanded ? "text-center" : ""}`}>
                <Link
                  href={`/notes/${note._id}`}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#091c38] transition-colors"
                >
                  <span className="text-lg">{note.icon}</span>
                  {isExpanded && <span className="text-sm">{note.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-3">
            <h3
              className={`text-sm font-semibold ${isExpanded ? "" : "hidden"}`}
            >
              Tasks List
            </h3>
            <div
              className={`flex justify-center items-center ${
                !isExpanded ? "w-full" : ""
              }`}
            >
              <Link
                className="text-blue-500 bg-white p-2 rounded-full shadow-md hover:bg-[#091c38] transition"
                aria-label="Add new tasks"
                href="/task"
              >
                ➕
              </Link>
            </div>
          </div>
          <ul
            className={`space-y-2 ${
              !isExpanded ? "flex flex-col justify-center items-center" : ""
            }`}
          >
            {tasks.map((task, index) => (
              <li key={index} className={`${!isExpanded ? "text-center" : ""}`}>
                <Link
                  href={`/task/${task._id}`}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#091c38] transition-colors"
                >
                  <span className="text-lg">{task.icon}</span>
                  {isExpanded && <span className="text-sm">{task.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto h-full">
        {/* Main page content goes here */}
      </div>
    </div>
  );
}
