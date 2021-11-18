/**
 * Function to make a request to avoid repeating try catches
 * @param  {Promise} promise
 * @returns {Promise[]} Array with [data, null] if it succeedes or
 * [null, error] if it fails
 */
export default async function makeRequest(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}
