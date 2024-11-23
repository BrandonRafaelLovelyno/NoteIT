"use client";

import Link from 'next/link';

export default function Sidebar() {
    const menuItems = [
        { name: 'Home', href: '/home', icon: '🏠' },
        { name: 'Search', href: '/search', icon: '🔍' },
        { name: 'Setting', href: '/setting', icon: '⚙️' },
    ];

    const notes = [
        { name: 'Important', href: 'notes/important', icon: '❗' },
        { name: 'Personal', href: '/notes/personal', icon: '🗂️' },
        { name: 'Quick Note', href: '/notes/quick-note', icon: '📝' },
        { name: 'Fisika', href: '/notes/fisika', icon: '📚' },
        { name: 'Matematika', href: '/notes/matematika', icon: '📊' },
    ];

    const toDoList = [
        { name: 'Groceries', href: '/todo/groceries', icon: '🛒' },
        { name: 'Work Tasks', href: '/todo/work', icon: '💼' },
        { name: 'Homework', href: '/todo/homework', icon: '📚' },
    ];

    return (
        <nav className="w-64 bg-[#102C57] text-white max-h-screen flex flex-col p-6 overflow-auto">
            <div className="mb-8">
                <h2 className="text-xl font-semibold tracking-wide">
                    User's NoteIT
                </h2>
            </div>
            <ul className="space-y-4 flex-1">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.href}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#091c38] transition-colors"
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                {/* "My Notes" section */}
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold">My Notes</h3>
                    <Link
                        href="/notes"
                        className="text-blue-500 bg-white p-2 rounded-full shadow-md hover:bg-[#091c38] transition flex items-center justify-center"
                        aria-label="Add new note"
                    >
                        ➕
                    </Link>
                </div>
                <ul className="space-y-2">
                    {notes.map((note, index) => (
                        <li key={index}>
                            <Link
                                href={note.href}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#091c38] transition-colors"
                            >
                                <span className="text-lg">{note.icon}</span>
                                <span className="text-sm">{note.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                {/* "To-Do List" section */}
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold">To-Do List</h3>
                    <button
                        className="text-blue-500 bg-white p-2 rounded-full shadow-md hover:bg-[#091c38] transition"
                        onClick={() => alert('Add new to-do functionality here!')}
                        aria-label="Add new to-do"
                    >
                        ➕
                    </button>
                </div>
                <ul className="space-y-2">
                    {toDoList.map((task, index) => (
                        <li key={index}>
                            <Link
                                href={task.href}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg--[#091c38] transition-colors"
                            >
                                <span className="text-lg">{task.icon}</span>
                                <span className="text-sm">{task.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
