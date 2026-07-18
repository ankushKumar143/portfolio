import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { VscSearch } from "react-icons/vsc";
import GithubRepoCard from "../components/GithubRepoCard";
import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
    const username = "ankushkumar143";

    const [search, setSearch] = useState("");
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [sortBy, setSortBy] = useState("updated");

    useEffect(() => {
        document.title = "Ankush Kumar | Github";
    }, []);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}/repos`,
                );

                const data = await response.json();

                setRepos(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}`,
                );
                const data = await response.json();
                setProfile(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProfile();
    }, []);

    const filteredRepos = repos.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase()),
    );

    const sortedRepos = [...filteredRepos];

    if (sortBy === "updated") {
        sortedRepos.sort(
            (a, b) => new Date(b.updated_at) - new Date(a.updated_at),
        );
    } else if (sortBy === "stars") {
        sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortBy === "name") {
        sortedRepos.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full text-white text-2xl">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-[#24292E] h-full w-full">
            <Navbar />

            {/* Profile Header */}
            <div className="m-8 p-5 jetbrain text-gray-200 bg-[#1F2428]">
                <div className="flex justify-center items-center gap-5">
                    <img
                        src={profile?.avatar_url}
                        alt="Profile"
                        className="w-40 h-40 rounded-full m-5"
                    />
                    <div className="flex text-[40px] gap-5">
                        <div>
                            <p>Repositories</p>
                            <h4 className="text-center">
                                {profile?.public_repos}
                            </h4>
                        </div>
                        <div className="border-r-2 border-l-2 px-5 border-[#F7816B]">
                            <p>Followers</p>
                            <h4 className="text-center">
                                {profile?.followers}
                            </h4>
                        </div>
                        <div>
                            <p>Following</p>
                            <h4 className="text-center">
                                {profile?.following}
                            </h4>
                        </div>
                    </div>
                </div>
                <h3 className="font-semibold text-2xl">{profile?.name}</h3>
                <p>@{profile?.login}</p>
            </div>

            {/* Contributions Graph */}
            <div className="m-8 flex justify-center p-5 rounded-lg">
                <GitHubCalendar
                    className="text-gray-200"
                    username={username}
                    colorScheme="dark"
                    fontSize={14}
                    theme={{
                        dark: [
                            "#161b22",
                            "#0e4429",
                            "#006d32",
                            "#26a641",
                            "#39d353",
                        ],
                    }}
                />
            </div>

            {/* Search */}
            <div className="flex text-gray-200">
                <div className="flex text-xl rounded-3xl w-[60%] bg-[#1F2428] justify-between m-8 p-5">
                    <input
                        className="border-none focus:outline-none"
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <VscSearch className=" text-2xl" />
                </div>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#1F2428] h-fit self-center text-gray-200 border-none rounded-lg px-5 py-5 outline-none"
                >
                    <option value="updated">Latest Updated</option>
                    <option value="stars">Most Stars</option>
                    <option value="name">Name (A-Z)</option>
                </select>
            </div>

            {/* Repositories */}
            <div className="flex flex-wrap gap-8 m-8">
                {sortedRepos.map((repo) => (
                    <GithubRepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    );
};

export default Github;
