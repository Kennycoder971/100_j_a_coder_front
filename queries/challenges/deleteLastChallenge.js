import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function deleteLastChallenge() {
  return await axios.delete(`${API_URL}/challenges`, {
    headers: getAuthorization(),
  });
}
