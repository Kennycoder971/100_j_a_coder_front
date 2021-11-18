import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function getUserFriends(userId) {
  return await axios.get(`${API_URL}/friends/${userId}`, {
    headers: getAuthorization(),
  });
}
