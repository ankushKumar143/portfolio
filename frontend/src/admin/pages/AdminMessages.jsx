import { useEffect, useState } from "react";
import { getMessages, deleteMessage } from "../../services/messageService";
import { FaTrash, FaEye } from "react-icons/fa";
import MessageModal from "../../components/MessageModal";

const AdminMessages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        document.title = "Ankush Kumar | Admin";
    }, []);

    const fetchMessages = async () => {
        try {
            setLoading(true);

            const res = await getMessages();

            setMessages(res.data);
        } catch (err) {
            setError("Failed to load messages.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this message?",
        );

        if (!confirmDelete) return;

        try {
            await deleteMessage(id);

            setMessages((prev) => prev.filter((message) => message._id !== id));
        } catch (err) {
            alert("Failed to delete message.");
        }
    };

    if (loading) {
        return <div className="p-8 text-white">Loading messages...</div>;
    }

    if (error) {
        return <div className="p-8 text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-[#24292E] p-8 text-white">
            <h1 className="text-3xl font-bold mb-8">Messages</h1>

            {messages.length === 0 ? (
                <div className="text-gray-400">No messages found.</div>
            ) : (
                <div className="overflow-x-auto rounded-lg border border-[#30363D]">
                    <table className="w-full">
                        <thead className="bg-[#21262D]">
                            <tr>
                                <th className="p-4 text-left">Name</th>

                                <th className="p-4 text-left">Email</th>

                                <th className="p-4 text-left">Subject</th>

                                <th className="p-4 text-left">Date</th>

                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {messages.map((msg) => (
                                <tr
                                    key={msg._id}
                                    className="border-t border-[#30363D] hover:bg-[#1F2428]"
                                >
                                    <td className="p-4">{msg.name}</td>

                                    <td className="p-4">{msg.email}</td>

                                    <td className="p-4">{msg.subject}</td>

                                    <td className="p-4">
                                        {new Date(msg.createdAt).toLocaleString(
                                            "en-IN",
                                            {
                                                dateStyle: "medium",
                                                timeStyle: "short",
                                            },
                                        )}
                                    </td>

                                    <td className="p-4 text-center">
                                        <div className="flex justify-center gap-3">
                                            <button
                                                onClick={() =>
                                                    setSelectedMessage(msg)
                                                }
                                                className="rounded bg-blue-500 p-2 hover:bg-blue-600"
                                            >
                                                <FaEye />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(msg._id)
                                                }
                                                className="rounded bg-red-500 p-2 hover:bg-red-600"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <MessageModal
                message={selectedMessage}
                onClose={() => setSelectedMessage(null)}
            />
        </div>
    );
};

export default AdminMessages;
