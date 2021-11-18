import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function deleteFriendRequestById(id) {
  return await axios.delete(`${API_URL}/friend_requests/${id}`, {
    headers: getAuthorization(),
  });
}
