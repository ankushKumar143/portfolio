import React from "react";
import { FaGithub } from "react-icons/fa";
import { GoRepoForked, GoStar, GoEye } from "react-icons/go";

const GithubRepoCard = ({ repo }) => {
    return (
        <div className="bg-[#1F2428] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col w-75 min-h-25 p-5 jetbrain leading-[1.3] rounded-xl">
            <h2 className="text-[21px] font-semibold text-[#F7816B]">
                {repo.name}
            </h2>
            <p className="text-[18px] my-5 text-gray-200">{repo.description}</p>
            <div className="flex mt-auto justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="flex">
                        <GoStar size={18} color="#F7816B" />
                        <p className="ml-1 text-[16px] text-gray-200">
                            {repo.stargazers_count}
                        </p>
                    </div>
                    <div className="flex">
                        <GoRepoForked size={18} color="#F7816B" />
                        <p className="ml-1 text-[16px] text-gray-200">
                            {repo.forks_count}
                        </p>
                    </div>
                    <div className="flex">
                        <GoEye size={18} color="#F7816B" />
                        <p className="ml-1 text-[16px] text-gray-200">
                            {repo.watchers_count}
                        </p>
                    </div>
                </div>
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub
                        className="hover:scale-110 transition-transform duration-300"
                        size={24}
                        color="#F7816B"
                    />
                </a>
            </div>
        </div>
    );
};

export default GithubRepoCard;
