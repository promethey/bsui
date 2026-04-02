/**
 * function for checks value types
 *
 * @example
 * check("string", "str1", "str2", "str3") // return true
 * check("number", 0, 1, 2) // return true
 *
 * @example
 * check("string", "str1", "str2", 3) // return false
 * check("number", 0, 1, "2") // return false
 *
 * @param {'number'|'string'|'object'} type - js typeof value
 * @param {...any} values - any js values for checking
 *
 * @return {boolean}
 *
 * @todo
 * - check array type Array.isArray()
 */
export function check(type, ...values) {
  /**
   * check: type is not empty
   */
  if (!type) {
    return null;
  }

  /**
   * check: values is not empty
   */
  if (!values) {
    return "";
  }

  let result = true;

  for (let value of values) {
    if (typeof value !== type) {
      result = false;
    }
  }

  return result;
}
