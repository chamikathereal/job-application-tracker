// client/lib/axios.ts
import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// INTERCEPTOR: Automatically add the Token to every request
api.interceptors.request.use((config) => {
  const token = Cookies.get("token"); // Get token from browser cookies
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach it!
  }
  return config;
});

export default api;