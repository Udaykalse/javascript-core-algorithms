function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

console.log(
  removeDuplicates([
    1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 6, 7, 8, 9, 0, 9, 8, 76, 5, 4, 3, 4, 5,
    6, 7, 7,
  ]),
);
