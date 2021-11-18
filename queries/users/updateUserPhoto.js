import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function updateUserPhoto(data) {
  return await axios.put(`${API_URL}/users/photo`, data, {
    headers: {
      ...getAuthorization(),
      "Content-Type": "multipart/form-data",
    },
  });
}
