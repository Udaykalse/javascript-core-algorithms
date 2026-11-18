function secondLargest(arr) {
  let largest = -Infinity,
    smallest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      smallest = largest;
      largest = arr[i];
    } else if (arr[i] > smallest && arr[i] !== largest) {
      smallest = arr[i];
    }
  }
  return smallest === -Infinity ? num : smallest;
}

console.log(secondLargest([1, 2, 99, 34, 9, 6, 90, 87, 678]));
