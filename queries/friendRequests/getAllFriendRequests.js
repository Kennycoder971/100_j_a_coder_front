import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function getAllFriendRequests(page = 1) {
  return await axios.get(`${API_URL}/friend_requests?page=${page}`, {
    headers: getAuthorization(),
  });
}
