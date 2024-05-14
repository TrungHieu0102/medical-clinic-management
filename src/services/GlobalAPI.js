import axios from "axios";

const BASE_URL = "https://b6d5-171-243-49-70.ngrok-free.app/";

export const endpoints = {
  categories: "categories/",
  doctors: "doctors/",
  getAllMedicine: "medicines/",
  register: "users/",
  login: "o/token/",
  current_user: "users/current-user/",
};

export const authApi = (accessToken) =>
  axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization:  `Bearer ${accessToken}` ,
    },
  });

export default axios.create({
  baseURL: BASE_URL,
});
