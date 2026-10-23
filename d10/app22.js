let arr = [1, 2, "a", null, "b", 3, undefined];
for (let i = 0; i <= arr.length; i++) {
  if (typeof arr[i] === "number") {
    console.log(arr[i]);
  }
}
