let arr = ["hello", 10, "world", 20, true, "js"];

let str = arr.filter((s) => typeof s === "string");

let str1 = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    str1.push(arr[i]);
  }
}

console.log("With Filter Method:- ", str);
console.log("Without Filter Method:- ", str);
