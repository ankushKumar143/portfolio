import React from "react";

const Dashboard = () => {
    return (
        <div className="p-5 m-9 leading-[1.35] jetbrain">
            <h2 className="text-[27px] mb-8 font-semibold text-gray-200 text-center">
                Admin Panel
            </h2>
            <div className="text-6xl text-gray-200 m-5">
                <p>Projects : 0</p>
                <p>Messages : 0</p>
            </div>
        </div>
    );
};

export default Dashboard;
