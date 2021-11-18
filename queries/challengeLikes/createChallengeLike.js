import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function createChallengeLike(challengeId) {
  return await axios.post(`${API_URL}/challenges/${challengeId}/likes`, null, {
    headers: getAuthorization(),
  });
}
