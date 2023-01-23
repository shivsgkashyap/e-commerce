import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2FiNDEwMWFlZWU1MDAxMDQ4YzRiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDQ4MzY1NCwiZXhwIjoxNjc1MDg4NDU0fQ.YMosS7KKEx970RICkB22guV7FYj5hvmAxTfgUNzo-i0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN} ` },
});
