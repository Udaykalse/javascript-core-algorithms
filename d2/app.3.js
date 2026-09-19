function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}

const original = { name: "John", details: { age: 25, city: "NYC" } };
const cloned = deepClone(original);
cloned.details.age = 30;

console.log("Original:", original);
console.log("Cloned:", cloned);