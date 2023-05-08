import axios from "axios";

const ROOT_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGRjMDIyMjI3YWZiMWVhZmUzNDRiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzQ1ODY3NSwiZXhwIjoxNjg0MDYzNDc1fQ.hV85FchjIjKIntw-ouzgfH_H3Q2HsiK0kvUtwLTdt4Q";
export const publicReq = axios.create({
  baseURL: ROOT_URL,
});

export const clientReq = axios.create({
  baseURL: ROOT_URL,
  header: {
    token: `Bearer ${TOKEN}`, // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGRjMDIyMjI3YWZiMWVhZmUzNDRiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzQ1ODY3NSwiZXhwIjoxNjg0MDYzNDc1fQ.hV85FchjIjKIntw-ouzgfH_H3Q2HsiK0kvUtwLTdt4Q
  },
});
