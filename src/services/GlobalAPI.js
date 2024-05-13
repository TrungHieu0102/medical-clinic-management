  import axios from "axios";
  const BASE_URL = "https://4d46-171-243-49-70.ngrok-free.app/";
  const ACCESSTOKEN  =
    "zIBBsoB18Egp1jk3XPVaxRmD0WQKnF";
  const AxioInstance = axios.create({ 
    baseURL: BASE_URL,
    headers: {
      Authorization: "Bearer " + ACCESSTOKEN,
    },
  });
  const getCategories = () => AxioInstance.get("categories/");
  //////
  const getDoctors = () =>
    AxioInstance.get("doctors/");
  const getDoctorsByCategory = (category) =>
    AxioInstance.get(
      "doctors?filters[categories][Name][$in]=" + category + "&populate=*"
    );
  const createAppointment = (data) => AxioInstance.post("/appointments", data);
  const getAllDoctors = () => AxioInstance.get("doctors?populate=*");
  const getUserAppointments = (email) =>
    AxioInstance.get(
      "appointments?filters[email][$eq]=" +
        email +
        "&populate[Doctor][populate][0]=image"
    );
  const getAppointmentsByUsername = (username) =>
    AxioInstance.get(
      "appointments?filters[email][$eq]=" + username + "&populate=*"
    );
  const deleteAppointments = (id) => AxioInstance.delete("/appointments/" + id);
  const getAllMedicine = () => AxioInstance.get("medicines/");
  const getMedicineByName = (name) =>
    AxioInstance.get("medicines?filters[name][$containsi]=" + name);
  const getAppointmentsPending = () =>
    AxioInstance.get("appointments?filters[Confirmed][$eq]=false&populate[Doctor][populate][0]=image");
  const getAppointmentsPendingByParam = (param) =>
    AxioInstance.get(
      "appointments?filters[$or][0][Username][$containsi]=" +
        param +
        "&filters[$or][1][Email][$containsi]=" +
        param +
        "&populate[Doctor][populate][0]=image"
    );
  export default {
    getCategories,
    getDoctors,
    getDoctorsByCategory,
    createAppointment,
    getAllDoctors,
    getUserAppointments,
    deleteAppointments,
    getAllMedicine,
    getMedicineByName,
    getAppointmentsPending,
    getAppointmentsByUsername,
    getAppointmentsPendingByParam,
  };
