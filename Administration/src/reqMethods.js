import axios from "axios";

const ROOT_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).user
).currentUser.entryToken;

console.log(TOKEN);

export const publicReq = axios.create({
  baseURL: ROOT_URL,
});

export const userReq = axios.create({
  baseURL: ROOT_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
