/**
 * function for checks value types
 *
 * @example
 * everyType("string", "str1", "str2", "str3") // return true
 * everyType("number", 0, 1, 2) // return true
 * everyType("string", "str1", "str2", 3) // return false
 * everyType("number", 0, 1, "2") // return false
 *
 * @param {'number'|'string'|'object'} type - js typeof value
 * @param {...any} values - any js values for checking
 *
 * @return {boolean} result
 */
export function everyType(type, ...values) {
  if (!type) return "";
  
  if (!values) return "";

  let result = true;

  for (let value of values) {
    if (typeof value !== type) {
      result = false;
    }
  }

  return result;
}
