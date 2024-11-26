"use client";

import { useSession } from "@/components/provider/session-provider";

export default function HomePage() {
  const { session, updateSession, clearSession } = useSession();

  const recentActivities = [
    { title: "Quick Note", lastAccessed: "12.9.24", icon: "📧" },
    { title: "Matematika", lastAccessed: "9.9.24", icon: "📝" },
    { title: "Important", lastAccessed: "5.9.24", icon: "❗" },
    { title: "Quick Note", lastAccessed: "12.9.24", icon: "📧" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Welcome home, {session?.user.email || "admin"}
      </h1>
      <section>
        <h2 className="text-xl font-medium mb-4 text-gray-700">
          Recent Activity
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg border border-gray-200 flex flex-col items-start items-start hover:shadow-lg transition-shadow"
            >
              <span className="text-sm text-gray-500 mb-2">
                Last Accessed: {activity.lastAccessed}
              </span>
              <h3 className="text-lg font-medium text-gray-700">
                {activity.title}
              </h3>
              <span className="text-2xl">{activity.icon}</span>
            </div>
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
