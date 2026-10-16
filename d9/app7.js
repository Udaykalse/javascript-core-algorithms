let arr = [1, "a", 2, null, "Uday", undefined];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    console.log(arr[i]);
  }
}
