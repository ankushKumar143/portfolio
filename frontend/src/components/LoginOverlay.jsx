import { useState } from "react";
import { LuUser } from "react-icons/lu";
import { LuLock } from "react-icons/lu";

const LoginOverlay = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginData),
                },
            );

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                window.location.reload();
            } else {
                alert(data.message);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <form
                onSubmit={handleSubmit}
                className="bg-[#1F2428] rounded-xl p-8 w-100 shadow-2xl border border-gray-700"
            >
                <h1 className="text-[#EEE] text-[32px] text-center mb-8">
                    Admin Login
                </h1>
                <div className="flex gap-2 mb-4 items-center">
                    <LuUser size={24} color="white" />
                    <input
                        type="email"
                        className="text-gray-200 text-[18px] border-none focus:outline-none"
                        name="email"
                        placeholder="Email"
                        value={loginData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <LuLock size={24} color="white" />
                    <input
                        type="password"
                        className="text-gray-200 text-[18px] border-none focus:outline-none"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="py-1 px-6 w-30 m-8 bg-[#F7816B] text-[#EEEEEE] text-[22px] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.45)] font-semibold"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginOverlay;
