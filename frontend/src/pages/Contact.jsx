import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { sendMessage } from "../services/messageService";

const Contact = () => {
    useEffect(() => {
        document.title = "Ankush Kumar | Contact";
    }, []);

    const socials = [
        {
            key: "website",
            value: "ankush.vercel.app",
            href: "https://ankushkumar143.netlify.app",
        },
        {
            key: "email",
            value: "ankush3627@gmail.com",
            href: "mailto:ankush3627@gmail.com",
        },
        {
            key: "github",
            value: "ankushkumar143",
            href: "https://github.com/ankushkumar143",
        },
        {
            key: "linkedin",
            value: "ankushkumarofficial",
            href: "https://www.linkedin.com/in/ankushkumarofficial/",
        },
        {
            key: "instagram",
            value: "sekaicanvas.dev",
            href: "https://www.instagram.com/sekaicanvas.dev/",
        },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [buttonText, setButtonText] = useState("Send Message");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setButtonText("Sending...");

        try {
            const response = await sendMessage(formData);

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setButtonText("Sent ✓");

            setTimeout(() => {
                setButtonText("Send Message");
            }, 2000); // 2 seconds baad normal ho jayega
        } catch (error) {
            setButtonText("Failed");

            setTimeout(() => {
                setButtonText("Send Message");
            }, 2000);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="bg-[#24292E] h-full w-full">
            <Navbar />
            <div className=" jetbrain flex m-8 gap-10 text-gray-200">
                <div className="w-1/2">
                    <h2 className="text-[22px] font-semibold mb-8">
                        Reach Out Via Socials
                    </h2>

                    <div className="text-[24px] leading-1.3">
                        {/* Opening */}
                        <div className="flex">
                            <span className="w-7 text-gray-500">1</span>

                            <span className="text-[#F78166]">.</span>
                            <span className="text-[#F78166]">socials</span>

                            <span className="ml-3">{"{"}</span>
                        </div>

                        {/* Dynamic Lines */}
                        {socials.map((item, index) => (
                            <div key={item.key} className="flex">
                                <span className="w-7 text-gray-500">
                                    {index + 2}
                                </span>

                                <span className="ml-10">{item.key}</span>

                                <span className="mx-3 text-gray-300">:</span>

                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#F78166] hover:underline"
                                >
                                    {item.value}
                                </a>

                                <span className="text-gray-200">;</span>
                            </div>
                        ))}

                        {/* Closing */}
                        <div className="flex">
                            <span className="w-10 text-gray-500">
                                {socials.length + 2}
                            </span>

                            <span>{"}"}</span>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 border-l border-[#F78166] pl-10">
                    <h3 className="text-[22px] font-semibold mb-8">
                        Or Fill Out This Form
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-5">
                            <div className="flex flex-col w-1/2">
                                <label className="uppercase tracking-[4px] text-gray-200 text-sm mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-[#1F2428] text-white px-4 py-2.5 outline-none border border-transparent focus:border-[#F78166] transition"
                                />
                            </div>

                            <div className="flex flex-col w-1/2">
                                <label className="uppercase tracking-[4px] text-gray-300 text-sm mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-[#1F2428] text-white px-4 py-2.5 outline-none border border-transparent focus:border-[#F78166] transition"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col mt-8">
                            <label className="uppercase tracking-[4px] text-gray-300 text-sm mb-2">
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="bg-[#1F2428] text-white px-4 py-2.5 outline-none border border-transparent focus:border-[#F78166] transition"
                            />
                        </div>

                        <div className="flex flex-col mt-8">
                            <label className="uppercase tracking-[4px] text-gray-300 text-sm mb-2">
                                Message
                            </label>

                            <textarea
                                rows="6"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-[#1F2428] text-white px-4 py-2.5 outline-none border border-transparent resize-none focus:border-[#F78166] transition"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`rounded px-6 py-3 mt-5 font-semibold transition-all duration-300 ${
                                buttonText === "Sent ✓"
                                    ? "bg-green-500 text-white"
                                    : "bg-[#F78166] text-white"
                            }`}
                        >
                            {buttonText}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
