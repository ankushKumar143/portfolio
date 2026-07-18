const MessageModal = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-full max-w-2xl rounded-lg border border-[#30363D] bg-[#161B22] p-8">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">
                        Message Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-6">
                    <div>
                        <p className="text-sm text-gray-400">Name</p>
                        <p className="text-white">{message.name}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white">{message.email}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-400">Subject</p>
                        <p className="text-white">{message.subject}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-400">Message</p>

                        <div className="mt-2 rounded-md bg-[#0D1117] p-4 text-gray-300 whitespace-pre-wrap">
                            {message.message}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        onClick={onClose}
                        className="rounded bg-[#F78166] px-6 py-2 font-semibold text-black"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageModal;
