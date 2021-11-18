import Cookies from "universal-cookie";
/**
 * Get the jwt from cookies and returns an object
 * to get the authorization from the server
 * @returns {Object} Object with key Autorization set with jwt
 */
export default function getAuthorization() {
  const cookies = new Cookies();
  const jwt = cookies.get("jwt");

  return {
    Authorization: `Bearer ${jwt}`,
  };
}
