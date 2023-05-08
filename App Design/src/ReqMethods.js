import axios from "axios";

const ROOT_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.entryToken;
export const publicReq = axios.create({
  baseURL: ROOT_URL,
});

export const clientReq = axios.create({
  baseURL: ROOT_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
