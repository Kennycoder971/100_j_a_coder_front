import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function getUserById(name) {
  return await axios.get(`${API_URL}/users?name=${name}`, {
    headers: getAuthorization(),
  });
}
