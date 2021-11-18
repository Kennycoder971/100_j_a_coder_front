import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function deleteFriend(friendId) {
  return await axios.delete(`${API_URL}/friends/${friendId}`, {
    headers: getAuthorization(),
  });
}
