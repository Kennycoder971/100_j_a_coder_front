import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function updateUserCover(userId, data) {
  return await axios.put(`${API_URL}/users/${userId}/cover`, data, {
    headers: {
      ...getAuthorization(),
      "Content-Type": "multipart/form-data",
    },
  });
}
