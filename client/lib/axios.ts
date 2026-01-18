// client/lib/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Connects to your Node Server
});

export default api;