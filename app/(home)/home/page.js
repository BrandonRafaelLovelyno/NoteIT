"use client";

import { useSession } from "@/components/provider/session-provider";
import { getBackendUrl } from "@/helper/integration";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const mergeAndSortByUpdatedAt = (list1, list2) => {
  const combinedList = [...list1, ...list2];

  combinedList.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return combinedList;
};

const getHourDifference = (dateString) => {
  const inputDate = new Date(dateString);

  const now = new Date();

  const differenceInMilliseconds = now - inputDate;

  const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

  const hourDifference = Math.abs(differenceInHours);
  return Math.round(hourDifference);
};

export default function HomePage() {
  const { session, updateSession, clearSession } = useSession();

  const [recent, setRecent] = useState([]);

  const fetchRecent = async () => {
    const backendUrl = getBackendUrl();

    const { data: notes } = await axios.get(`${backendUrl}/note`, {
      withCredentials: true,
    });
    const { data: tasks } = await axios.get(`${backendUrl}/task`, {
      withCredentials: true,
    });

    const sortedResult = mergeAndSortByUpdatedAt(notes, tasks);
    setRecent(sortedResult.slice(0, 4));
  };

  useEffect(() => {
    fetchRecent();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Welcome home
      </h1>
      <section>
        <h2 className="text-xl font-medium mb-4 text-gray-700">
          Recent Activity
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recent.map((activity, index) => (
            <Link
              key={index}
              href={
                activity.deadline
                  ? `/task/${activity._id}`
                  : `/notes/${activity._id}`
              }
            >
              <div className="bg-white shadow rounded-lg border border-gray-200 flex flex-col items-start hover:shadow-lg transition-shadow overflow-clip">
                {activity.image ? (
                  <div className="relative w-full h-36">
                    <Image src={activity.image} alt={activity.image} fill />
                  </div>
                ) : (
                  <div className="w-full h-36 bg-gray-700" />
                )}
                <div className="flex flex-col p-4">
                  <span className="text-sm text-gray-500 mb-2">
                    Last Accessed: {getHourDifference(activity.updatedAt)}h ago
                  </span>
                  <h3 className="text-lg font-medium text-gray-700">
                    {activity.title}
                  </h3>
                  <span className="text-2xl">{activity.icon}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-medium mb-4s text-gray-700">
          Deadlines !!!
        </h2>
        <p className="text-gray-600">Coming soon...</p>
      </section>
    </div>
  );
}
