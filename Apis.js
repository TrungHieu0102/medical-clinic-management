import axios from "axios";
const HOST = "https://haunguyen.pythonanywhere.com"

export const endpoints = {
  
    'login': '/o/token/',
    
}
export const authApi = (accessToken) => axios.create({
    baseURL: HOST,
    headers: {
        "Authorization": `Bearer ${accessToken}`
    }
})
export default axios.create({
    baseURL: HOST
})