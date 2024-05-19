import axios from "axios";
import { URLConstants } from "../constants/urls";

export default axios.create({
  baseURL: URLConstants.BASE_URL,
  headers: { "Content-Type": "application/json" },
});
export const axiosAuth = axios.create({
  baseURL: URLConstants.BASE_URL,
  headers: { "Content-Type": "application/json" },
  // Set withCredentials to true for all requests
  withCredentials: true,
});
