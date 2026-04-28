const SUPPORT_TYPES = ["string", "number", "object", "array"];

/**
 * Function for check value type
 * use strict mode for check empty string, empty object and empty array
 *
 * @example
 * is("string", "") // true
 * is("string", " ") // true
 * is("string", " ", { notEmpty: true }) // false
 *
 * is("number", 123) // true
 * is("number", 0) // true
 *
 * is("object", {}) // true
 * is("object", {}, { notEmpty: true }) // false
 * is("object", { value: "" }, { notEmpty: true }) // true
 *
 * @param {any} type - "string", "number", "object", "array"
 * @param {any} value - all of types
 * @param {boolean} option.notEmpty - not empty check value (work for string, object and array)
 *
 * @returns {boolean} result
 */
export function is(type, value, options = { notEmpty: false }) {
  if (!SUPPORT_TYPES.includes(type)) {
    return false;
  }

  if (value === undefined) {
    return false;
  }

  switch (type) {
    case "string": {
      if (typeof value !== type) return false;
      if (options.notEmpty && value.trim().length === 0) return false;

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

    default: {
      return typeof value === type;
    }
  }
}
