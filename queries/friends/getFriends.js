import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function getFriends() {
  return await axios.get(`${API_URL}/friends`, {
    headers: getAuthorization(),
  });
}
