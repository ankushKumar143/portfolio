import React from "react";

const Card = ({ project }) => {
    return (
        <div className="h-120 w-75 rounded-b-3xl bg-[#1F2428]">
            <img
                src={project.image}
                alt={project.title}
                className="h-37.5 w-75 object-cover"
            ></img>
            <div className="px-5 py-3 leading-[1.3]">
                <h2 className="text-[21px] mb-3 font-semibold text-gray-200">
                    {project.title}
                </h2>
                <p className="text-[14px] text-gray-200">
                    {project.description}
                </p>
            </div>
        </div>
    );
};

export default Card;
