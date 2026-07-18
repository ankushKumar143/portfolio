import { useEffect, useState } from "react";
import AdminNav from "../../components/AdminNav";

const AdminAbout = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        document.title = "Ankush Kumar | Admin";
    }, []);

    useEffect(() => {
        const fetchAbout = async () => {
            const response = await fetch("http://localhost:3000/api/about");
            const data = await response.json();
            setTitle(data.title);
            setContent(data.content);
        };
        fetchAbout();
    }, []);

    const handleSave = async () => {
        const response = await fetch("http://localhost:3000/api/about", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ title, content }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            setSaved(true);
            setTimeout(() => {
                setSaved(false);
            }, 5000);
        }
    };

    return (
        <div className="bg-[#24292E] h-full w-full">
            <div className="p-5 m-9 text-gray-200 leading-[1.35] jetbrain flex flex-col">
                <input
                    className="border-none outline-none"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <textarea
                    rows="20"
                    className="mt-8 border-none outline-none resize-none bg-transparent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button
                    onClick={handleSave}
                    className="py-1.5 px-5 w-35 m-8 bg-[#F7816B] text-[#EEEEEE] text-[22px] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.45)] font-semibold"
                >
                    {saved ? "Saved ✓" : "Save"}
                </button>
            </div>
        </div>
    );
};

export default AdminAbout;
