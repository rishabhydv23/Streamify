import axios from "axios";

// Use a simpler configuration that explicitly sets the base URL
export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://streamify-backend-9dkh.onrender.com/api",
  withCredentials: true, // send cookies with the request
});