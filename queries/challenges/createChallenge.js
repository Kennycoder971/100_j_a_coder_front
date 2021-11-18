import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function createChallenge(obj) {
  return await axios.post(`${API_URL}/challenges`, obj, {
    headers: getAuthorization(),
  });
}
