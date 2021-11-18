import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function update(obj) {
  return await axios.put(`${API_URL}/challenges`, obj, {
    headers: getAuthorization(),
  });
}
