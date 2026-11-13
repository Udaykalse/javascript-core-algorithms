let arr = [1, null, "a", 0, undefined];

let nums = [];

for (let i = 0; i <= arr.length; i++) {
  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }
}

console.log(nums)