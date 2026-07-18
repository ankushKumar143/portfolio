import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/messages`;

export const sendMessage = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
};

export const getMessages = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const deleteMessage = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
