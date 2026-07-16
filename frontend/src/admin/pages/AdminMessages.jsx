import { useEffect } from "react";
import AdminNav from "../../components/AdminNav";

const AdminMessages = () => {
    useEffect(() => {
        document.title = "Ankush Kumar | Admin";
    }, []);
    return <div className="bg-[#24292E] h-full w-full"></div>;
};

export default AdminMessages;
