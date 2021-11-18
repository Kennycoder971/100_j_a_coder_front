import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function getChallengeLikes(challengeId) {
  return await axios.get(`${API_URL}/challenges/${challengeId}/likes`, {
    headers: getAuthorization(),
  });
}
