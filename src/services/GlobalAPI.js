import axios from "axios";
const BASE_URL = "http://192.168.0.106:1337/api";
const API_KEY =
  "f10378555bbee8474223237251779b6e9d9753979b53ea44b69bb069c503ad9a77eb7b891c349940f9401c6a1431c0aad1f61158b3fb9f5c9348f9b0b1656b3d9dcd245f4c4107be35d8288314847b81b6547bb971126668b176347fa50695a960528692511793c38297c3e9ebadca46c00ddd819d3f281822c0ceff0c7d679f";
const AxioInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Bearer " + API_KEY,
  },
});

const getSlider = () => AxioInstance.get("/sliders?populate=*");
const getCategories = () => AxioInstance.get("/categories?populate=*");
const getSpecialDoctors = () =>
  AxioInstance.get("/doctors?filters[Special][$eq]=true&populate=*");
const getDoctorsByCategory = (category) =>
  AxioInstance.get(
    "doctors?filters[categories][Name][$in]=" + category + "&populate=*"
  );
const createAppointment = (data) => AxioInstance.post("/appointments", data);
const getAllDoctors = () => AxioInstance.get("doctors?populate=*");
const getUserAppointments = (email) =>
  AxioInstance.get("appointments?filters[email][$eq]=" + email + "&populate=*");
export default {
  getSlider,
  getCategories,
  getSpecialDoctors,
  getDoctorsByCategory,
  createAppointment,
  getAllDoctors,
  getUserAppointments
};
