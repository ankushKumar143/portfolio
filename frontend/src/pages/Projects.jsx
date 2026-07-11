import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = "Ankush Kumar | Projects";
    }, []);
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("http://localhost:3000/api/projects");
            const data = await response.json();
            setProjects(data);
        };
        fetchProjects();
    }, []);
    return (
        <div className="bg-[#24292E] h-full w-full">
            <Navbar />
            <div className="p-9 jetbrain">
                <h2 className="text-[21px] font-semibold text-gray-200">
                    Stuff I've Built So Far
                </h2>
                <div className="flex flex-wrap gap-5 mt-7">
                    {projects.map((project) => (
                        <Card key={project._id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
