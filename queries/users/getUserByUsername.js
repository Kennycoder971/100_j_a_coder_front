import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function getUserByUsername(username) {
  return await axios.get(`${API_URL}/users?name=${username}`, {
    headers: getAuthorization(),
  });
}
