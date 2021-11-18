import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function deleteLastChallenge() {
  return await axios.post(`${API_URL}/challenge`, null, {
    headers: getAuthorization(),
  });
}
