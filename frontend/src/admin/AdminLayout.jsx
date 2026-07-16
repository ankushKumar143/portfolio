import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";

const AdminLayout = () => {
    useEffect(() => {
        document.title = "Ankush Kumar | Admin";
    }, []);

    return (
        <div className="bg-[#24292E] h-full w-full">
            <AdminNav />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
