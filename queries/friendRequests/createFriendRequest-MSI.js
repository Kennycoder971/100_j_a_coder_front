import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function createFriendRequest(userId) {
  return await axios.post(`${API_URL}/friend_requests/${userId}`, null, {
    headers: getAuthorization(),
  });
}
