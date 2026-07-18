import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/projects`;

const getAuthHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "multipart/form-data",
});

export const getProjects = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createProject = async (projectData) => {
    const response = await axios.post(API_URL, projectData, {
        headers: getAuthHeaders(),
    });

    return response.data;
};

export const updateProject = async (id, projectData) => {
    const response = await axios.patch(`${API_URL}/${id}`, projectData, {
        headers: getAuthHeaders(),
    });

    return response.data;
};

export const deleteProject = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });

    return response.data;
};
