import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function acceptFriendRequest(id) {
  return await axios.put(`${API_URL}/friend_requests/${id}`, null, {
    headers: getAuthorization(),
  });
}
