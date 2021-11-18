/**
 * For client side validation
 * Returns true or false if the object has empty fields
 * @param  {object} fieldsObject
 * @returns {Boolean} true or false
 */
export function hasEmptyFields(fieldsObject) {
  return Object.values(fieldsObject).some((field) => field === "");
}
/**
 * @param  {String | Number} valueOne
 * @param  {String | Number} valueTwo
 * @returns {Boolean} true or false
 */
export function isEqual(valueOne, valueTwo) {
  return valueOne === valueTwo;
}

/**
 * @date 2021-11-09
 * @param {String} value
 * @returns {Boolean} true or false
 */
export function isEmail(value) {
  return /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(value);
}
