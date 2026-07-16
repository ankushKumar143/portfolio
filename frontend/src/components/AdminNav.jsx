import React from "react";
import { NavLink } from "react-router-dom";
import reactsvg from "../assets/react.svg";
import htmlLogo from "../assets/html-icon.svg";
import cssLogo from "../assets/css-icon.svg";
import jsLogo from "../assets/jslogo.svg";
import markdown from "../assets/markdown.svg";

const AdminNav = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <nav className="bg-[#1F2428] flex justify-between">
            <ul className="flex text-gray-200">
                <li>
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#24292E] flex items-center gap-2 border border-[#24292E] border-t border-t-[#F7816B] py-1.5 px-6"
                                : "bg-[#1F2428] flex items-center border gap-2 border-[#24292E] py-1.5 px-6"
                        }
                    >
                        <img
                            src={reactsvg}
                            alt="react"
                            className="w-4 h-4 object-contain"
                        />
                        <span>dashboard.jsx</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/about"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#24292E] flex items-center gap-2 border border-[#24292E] border-t border-t-[#F7816B] py-1.5 px-6"
                                : "bg-[#1F2428] flex items-center gap-2 border border-[#24292E] py-1.5 px-6"
                        }
                    >
                        <img
                            src={htmlLogo}
                            alt="html"
                            className="w-4 h-4 object-contain"
                        />
                        <span>about.html</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/projects"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#24292E] flex items-center gap-2 border border-[#24292E] border-t border-t-[#F7816B] py-1.5 px-6"
                                : "bg-[#1F2428] flex items-center gap-2 border border-[#24292E] py-1.5 px-6"
                        }
                    >
                        <img
                            src={jsLogo}
                            alt="js"
                            className="w-4 h-4 object-contain"
                        />
                        <span>projects.js</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/messages"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-[#24292E] flex items-center gap-2 border border-[#24292E] border-t border-t-[#F7816B] py-1.5 px-6"
                                : "bg-[#1F2428] flex items-center gap-2 border border-[#24292E] py-1.5 px-6"
                        }
                    >
                        <img
                            src={markdown}
                            alt="markdown"
                            className="w-4 h-4 object-contain"
                        />
                        <span>messages.md</span>
                    </NavLink>
                </li>
            </ul>
            <button
                onClick={handleLogout}
                className="py-1.5 px-6 w-35 bg-[#F7816B] text-[#EEEEEE] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.45)] font-semibold"
            >
                Log Out
            </button>
        </nav>
    );
};

export default AdminNav;
