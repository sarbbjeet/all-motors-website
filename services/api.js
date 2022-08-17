// api.js
import Axios from "axios";
const port = process.env.PORT || 3000;
let url = `http://localhost:${port}`;

const api = Axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default api;
