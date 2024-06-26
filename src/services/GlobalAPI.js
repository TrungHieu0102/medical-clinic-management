import axios from "axios";

const BASE_URL = "https://3636-113-161-56-156.ngrok-free.app/";

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
  deleteAppointment: (id) => `appointments/${id}/`,
  updateInfor :"users/update-infor/",
  forgotPassword :"users/forgot-password",
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
