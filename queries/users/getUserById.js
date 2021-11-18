import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function getUserById(id) {
  return await axios.get(`${API_URL}/users/${id}`, {
    headers: getAuthorization(),
  });
}
