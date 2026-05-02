const SUPPORT_TYPES = ["string", "number", "object", "array", "boolean"];

/**
 * Function for check value type
 * use option for check false, empty string, empty object and empty array
 *
 * @example
 * is("string", "name") // true
 * is("number", 123) // true
 * is("array", [1, 2, 3]) // true
 *
 * @example
 * is("string", " ") // true
 * is("string", " ", { notEmpty: true }) // false
 *
 * @example
 * is("number", 123) // true
 * is("number", 0) // true
 *
 * @example
 * is("object", { name: "John" }) // true
 *
 * @example
 * is("object", {}, { notEmpty: true }) // false
 * is("object", { name: "Doe" }, { notEmpty: true }) // true
 *
 * @example
 * is("boolean", true) // true
 * is("boolean", false) // true
 * is("boolean", false, { notFalse: true }) // false
 *
 * @typedef {object} OptionObject
 * @property {boolean} [notEmpty] - not empty check value (work for string, object and array)
 * @property {boolean} [notFalse] - not false check value (work for boolean)
 *
 * @param {"object"|"array"|"string"|"number"|"boolean"} type - "string", "number", "object", "array", "boolean"
 * @param {Object|Array<number>|string|number|boolean} value - all of types
 * @param {OptionObject} [options]
 *
 * @returns {boolean}
 *
 * @author Sedelkov Egor [promethey] <sedelkovegor@gmail.com>
 * @version 1.0.0
 */
export function is(
  type,
  value,
  options = { notEmpty: false, notFalse: false },
) {
  if (!SUPPORT_TYPES.includes(type)) {
    return false;
  }

  if (value === undefined) {
    return false;
  }

  switch (type) {
    case "string": {
      if (typeof value !== type) return false;
      if (options.notEmpty && String(value).trim().length === 0) return false;

      return true;
    }

    case "object": {
      if (typeof value !== type || !value || Array.isArray(value)) return false;
      if (options.notEmpty && Object.keys(value).length === 0) return false;

      return true;
    }

    case "array": {
      if (!Array.isArray(value)) return false;
      if (options.notEmpty && value.length === 0) return false;

      return true;
    }

    case "number": {
      return typeof value === type && !Number.isNaN(value);
    }

    case "boolean": {
      if (typeof value !== type) return false;
      if (options.notFalse && !value) return false;

      return true;
    }
  }
}
