/**
 * My api return an error Object with an error key witch is an array of objects.
 * It returns only the values in an array
 * @param  {Object} data
 * @return {Array} Array of error messages
 */
export default function getErrorMsg(data) {
  return data.errors?.map((e) => Object.values(e)[0]);
}
