import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function createFriendRequest(id) {
  return await axios.post(`${API_URL}/friend_requests/${id}`, {
    headers: getAuthorization(),
  });
}
