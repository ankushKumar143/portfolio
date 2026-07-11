import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Ankush Kumar | Home";
    }, []);
    return (
        <div className="h-full w-full bg-[#24292E]">
            <Navbar />
            <h1 className="absolute top-1/2 left-88 -translate-y-1/2 text-[11rem] font-black text-[#2B2F33] monst leading-[1.1]">
                I BUILD WEBSITES
            </h1>
            <div className="absolute top-1/2 left-88 -translate-y-1/2">
                <h1 className="jetbrain text-[#EEEEEE] text-6xl mb-2 font-semibold">
                    Ankush Kumar
                </h1>
                <h2 className="jetbrain text-[#EEEEEE] text-[28px] font-light mt-4 mb-12">
                    Full Stack Web Developer
                </h2>
                <button className="py-1.5 px-5 bg-[#F7816B] text-[#EEEEEE] text-[22px] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.45)] font-semibold">
                    <NavLink to="/projects">View Work</NavLink>
                </button>
                <button className="py-1.5 px-5 border-2 border-[#F7816B] text-[#EEEEEE] text-[22px] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.45)] ml-8">
                    <NavLink to="/contact">Contact Me</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Home;
