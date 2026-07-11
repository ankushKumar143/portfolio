import { useEffect } from "react";
import AdminNav from "../components/AdminNav";

const AdminLayout = () => {
    useEffect(() => {
        document.title = "Ankush Kumar | Admin";
    }, []);

    return (
        <div className="bg-[#24292E] h-full w-full">
            <AdminNav />
            <div className="p-5 m-9 leading-[1.35] jetbrain">
                <h2 className="text-[27px] mb-8 font-semibold text-gray-200 text-center">
                    Admin Panel
                </h2>
                <div className="text-6xl text-gray-200 m-5">
                    <p>Projects : 0</p>
                    <p>Messages : 0</p>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
