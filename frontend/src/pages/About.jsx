import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const About = () => {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        document.title = "Ankush Kumar | About";
    }, []);

    useEffect(() => {
        const fetchAbout = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/about`);
            const data = await response.json();
            setAbout(data);
        };
        fetchAbout();
    }, []);

    return (
        <div className="bg-[#24292E] h-full w-full">
            <Navbar />
            <div className="p-5 m-9 leading-[1.35] jetbrain shadow-[2px_2px_10px_rgba(0,0,0,0.1)]">
                <h2 className="text-[27px] mb-8 font-semibold text-gray-200 text-center">
                    {about?.title}
                </h2>
                <p className="whitespace-pre-line text-[18px] text-gray-200">
                    {about?.content}
                </p>
            </div>
        </div>
    );
};

export default About;
