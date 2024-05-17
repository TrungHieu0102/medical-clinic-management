import axios from "axios";

const BASE_URL = "https://6edb-171-243-49-70.ngrok-free.app/";

export const endpoints = {
  categories: "categories/",
  doctors: "doctors/",
  doctorDetail: (doctorID) => `/doctors/${doctorID}/`,
  getAllMedicine: "medicines/",
  register: "users/",
  login: "o/token/",
  current_user: "users/current-user/",
  appointments: "appointments/",
  bookAppointment: (doctorID) => `doctors/${doctorID}/appointment/`,
  updateInfor :"users/update-infor/",
  forgotPassword :"users/forgot-password"
};

export const authApi = (accessToken) =>
  axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export default axios.create({
  baseURL: BASE_URL,
});
