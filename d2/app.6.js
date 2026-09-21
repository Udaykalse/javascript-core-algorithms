function flattenObject(obj, prefix = "") {
  let result = {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}

const nested = { user: { name: "Alice", address: { city: "London" } } };
console.log(flattenObject(nested));