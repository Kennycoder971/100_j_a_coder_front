import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function getLastChallenge() {
  return await axios.get(`${API_URL}/challenges/last`, {
    headers: getAuthorization(),
  });
}
