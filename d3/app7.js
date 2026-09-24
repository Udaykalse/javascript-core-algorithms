let arr = ["a", 1, null, "b", 2, undefined, 3];
let num = arr.filter((ele) => typeof ele === "number");

console.log(num);
