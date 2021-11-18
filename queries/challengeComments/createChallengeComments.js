import axios from "axios";
import getAuthorization from "@/helpers/getAuthorization";
import { API_URL } from "config";

export default async function createChallengeComments(challengeId, text) {
  return await axios.post(
    `${API_URL}/challenges/${challengeId}/comments`,
    { content: text },
    {
      headers: getAuthorization(),
    }
  );
}
