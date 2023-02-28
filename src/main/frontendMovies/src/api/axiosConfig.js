import axios from "axios";

// CORS - access to relevant endpoints
export default axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "ngrok-skip-browser-warning": "true",
  }
});