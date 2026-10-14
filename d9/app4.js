function secondlargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] === second && arr[i] !== first) {
      first = arr[i];
    }
  }
  return second
}

console.log(secondlargest([56, 7, 89, 54, 32]));
