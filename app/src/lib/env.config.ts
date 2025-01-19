const env = import.meta.env;
const { VITE_BASE_API_URL } = env;

const checkAPIUrlExists = () => {
    if (!VITE_BASE_API_URL) return false;
    return true;
}

export const BASE_API_URL = checkAPIUrlExists() ? VITE_BASE_API_URL + "/api/v1" : "http://localhost:3000/api/v1";