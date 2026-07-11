import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";

const Hero = () => {
    return (
        <div className="h-full w-full bg-[#24292E]">
            <Navbar />
            <Home />
        </div>
    );
};

export default Hero;
