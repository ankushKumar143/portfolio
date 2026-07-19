import { useState } from "react";
import reactsvg from "../assets/react.svg";
import htmlLogo from "../assets/html-icon.svg";
import cssLogo from "../assets/css-icon.svg";
import jsLogo from "../assets/jslogo.svg";
import markdown from "../assets/markdown.svg";
import {
    VscFiles,
    VscGithub,
    VscCode,
    VscMail,
    VscAccount,
    VscSettingsGear,
    VscChevronDown,
    VscChevronRight,
} from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const [isopen, setIsOpen] = useState(true);
    const location = useLocation();

    return (
        <div className="w-70 bg-[#1F2428] flex">
            <div className="w-15.5 bg-[#24292E] flex flex-col justify-between">
                <div>
                    <NavLink
                        to="/"
                        className={`w-full bloack flex justify-center py-2.5 border-l-2 ${location.pathname === "/" ? "border-[#F7816B]" : "border-transparent"}`}
                    >
                        <VscFiles
                            className={`w-7 h-7 ${location.pathname === "/" ? "text-gray-200" : "text-gray-500 hover:text-white cursor-pointer"}`}
                        />
                    </NavLink>
                    <NavLink
                        to="/github"
                        className={`w-full bloack flex justify-center py-2.5 border-l-2 ${location.pathname === "/github" ? "border-[#F7816B]" : "border-transparent"}`}
                    >
                        <VscGithub
                            className={`w-7 h-7 ${location.pathname === "/github" ? "text-gray-200" : "text-gray-500 hover:text-white cursor-pointer"}`}
                        />
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={`w-full flex justify-center py-2.5 border-l-2 ${location.pathname === "/projects" ? "border-[#F7816B]" : "border-transparent"}`}
                    >
                        <VscCode
                            className={`w-7 h-7 ${location.pathname === "/projects" ? "text-gray-200" : "text-gray-500 hover:text-white cursor-pointer"}`}
                        />
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={`w-full flex justify-center py-2.5 border-l-2 ${location.pathname === "/contact" ? "border-[#F7816B]" : "border-transparent"}`}
                    >
                        <VscMail
                            className={`w-7 h-7 ${location.pathname === "/contact" ? "text-gray-200" : "text-gray-500 hover:text-white cursor-pointer"}`}
                        />
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/about"
                        className={`w-full flex justify-center py-2.5 border-l-2 ${location.pathname === "/about" ? "border-[#F7816B]" : "border-transparent"}`}
                    >
                        <VscAccount
                            className={`w-7 h-7 ${location.pathname === "/about" ? "text-gray-200" : "text-gray-500 hover:text-white cursor-pointer"}`}
                        />
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={`w-full flex justify-center py-2.5 border-l-2 ${location.pathname === "/settings" ? "border-[#F7816B]" : "border-transparent"}`}
                    >
                        <VscSettingsGear
                            className={`w-7 h-7 ${location.pathname === "/settings" ? "text-gray-200" : "text-gray-500 hover:text-white cursor-pointer"}`}
                        />
                    </NavLink>
                </div>
            </div>
            <div className="w-64.5 flex flex-col border-r border-[#151618]">
                <h5 className="text-gray-200 text-[14px] p-2 ml-2 tracking-wider">
                    EXPLORER
                </h5>
                <div className="mt-1">
                    <button
                        onClick={() => setIsOpen(!isopen)}
                        className="flex items-center"
                    >
                        {isopen ? (
                            <VscChevronDown className="w-5 h-5 text-gray-500" />
                        ) : (
                            <VscChevronRight className="w-5 h-5 text-gray-500" />
                        )}
                        <span className="text-gray-200 text-[14px] font-semibold p-1 tracking-wider">
                            PORTFOLIO
                        </span>
                    </button>
                    {isopen && (
                        <div className="text-gray-200 text-[14px] gap-30 ml-7">
                            <p className="p-0.5 flex items-center gap-2">
                                <img
                                    src={reactsvg}
                                    alt="reactsvg"
                                    className="w-3.5 h-3.5 object-contain"
                                />
                                <NavLink to="/">home.jsx</NavLink>
                            </p>
                            <p className="p-0.5 flex items-center gap-2">
                                <img
                                    src={htmlLogo}
                                    alt="htmlLogo"
                                    className="w-3.5 h-3.5 object-contain"
                                />
                                <NavLink to="/about">about.html</NavLink>
                            </p>
                            <p className="p-0.5 flex items-center gap-2">
                                <img
                                    src={cssLogo}
                                    alt="cssLogo"
                                    className="w-3.5 h-3.5 object-contain"
                                />
                                <NavLink to="/contact">contact.css</NavLink>
                            </p>
                            <p className="p-0.5 flex items-center gap-2">
                                <img
                                    src={jsLogo}
                                    alt="jsLogo"
                                    className="w-3.5 h-3.5 object-contain"
                                />
                                <NavLink to="/projects">projects.js</NavLink>
                            </p>
                            <p className="p-0.5 flex items-center gap-2">
                                <img
                                    src={markdown}
                                    alt="markdown"
                                    className="w-3.5 h-3.5 object-contain"
                                />
                                <NavLink to="/github">github.md</NavLink>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
