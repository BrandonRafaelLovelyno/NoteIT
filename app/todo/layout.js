import Sidebar from '@/components/layout/sidebar';

export default function ToDoLayout({ children }) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}