import axios from "axios";

export const instance = axios.create({
    baseURL: "http://3.65.206.192:3000",
})