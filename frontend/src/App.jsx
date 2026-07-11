import Sidebar from "./components/Sidebar";
import vslogo from "./assets/vslogo.webp";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Github from "./pages/Github";
import Settings from "./pages/Settings";
import dtick from "./assets/dtick.svg";
import Admin from "./admin/AdminLayout";
import AdminAbout from "./admin/pages/AdminAbout";
import AdminMessages from "./admin/pages/AdminMessages";
import AdminProjects from "./admin/pages/AdminProjects";
import {
    VscError,
    VscWarning,
    VscSourceControl,
    VscBell,
} from "react-icons/vsc";
import { FaBroadcastTower } from "react-icons/fa";

const App = () => {
    return (
        <div className="h-screen w-screen flex flex-col">
            <div
                className="w-full
                  h-8.5
                  bg-[#1F2428]
                  flex
                  text-white
                  items-center
                  justify-between
                  border-b
                  border-[#151618]
                "
            >
                <div className="ml-3 text-[15px] flex items-center gap-4.5">
                    <img
                        src={vslogo}
                        alt="vslogo"
                        className="w-4 h-4 object-contain"
                    />
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Run</span>
                    <span>Terminal</span>
                    <span>Help</span>
                </div>
                <h6 className="text-[15px]">Ankush Kumar - VS Code</h6>
                <div className="flex gap-2 mr-3 w-[20%] justify-end">
                    <div className="bg-yellow-200 w-3.5 h-3.5 rounded-4xl"></div>
                    <div className="bg-green-400 w-3.5 h-3.5 rounded-4xl"></div>
                    <div className="bg-red-400 w-3.5 h-3.5 rounded-4xl"></div>
                </div>
            </div>
            <div className="flex flex-1 min-h-0">
                <Sidebar />
                <div className="flex-1 min-h-0 overflow-y-auto bg-[#24292E]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/github" element={<Github />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route
                            path="/admin/about"
                            element={<AdminAbout />}
                        ></Route>
                        <Route
                            path="/admin/projects"
                            element={<AdminProjects />}
                        ></Route>
                        <Route
                            path="/admin/messages"
                            element={<AdminMessages />}
                        ></Route>
                    </Routes>
                </div>
            </div>
            <div className="w-full h-7 bg-[#24292E] border-t border-[#151618] flex justify-between">
                <div className="flex items-center">
                    <a
                        href="https://github.com/ankushkumar143/"
                        className="flex items-center gap-1 ml-5 text-gray-200  hover:text-white cursor-pointer"
                    >
                        <VscSourceControl className="w-4 h-4" />
                        <span className="text-sm">main</span>
                    </a>
                    <div className="flex items-center text-gray-200 ml-5 gap-1 hover:text-white cursor-pointer">
                        <VscError className="w-4 h-4 " />
                        <span className="text-sm">0</span>
                    </div>
                    <div className="flex items-center text-gray-200 ml-3 gap-1 hover:text-white cursor-pointer">
                        <VscWarning className="w-4 h-4 " />
                        <span className="text-sm">0</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center text-gray-200 hover:text-white mr-5 gap-2">
                        <span>{"{ }"}</span>
                        <span className="text-sm">JavaScript JSX</span>
                    </div>
                    <div className="flex items-center text-gray-200 hover:text-white mr-5 gap-1">
                        <FaBroadcastTower className="w-4 h-4 cursor-pointer" />
                        <span className="text-sm">Go Live</span>
                    </div>
                    <div className="flex items-center text-gray-200 hover:text-white mr-5 gap-1">
                        <img
                            src={dtick}
                            alt="dtick"
                            className="w-6 h-6 object-contain"
                        />
                        <span className="text-sm">Prettier</span>
                    </div>
                    <VscBell className="w-4 h-4 text-gray-200 hover:text-white cursor-pointer font-bold mr-5" />
                </div>
            </div>
        </div>
    );
};

export default App;
