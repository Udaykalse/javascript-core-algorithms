let arr = ["a", 1, null, "b", 2, undefined, 3];
let num = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    num.push(arr[i]);
  }
}

console.log(num)