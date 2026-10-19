function findMinMax(arr) {
  if (arr.length === 0) return null;
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { "Mix Number:- ": max, "Min Number:- ": min };
}
console.log(findMinMax([1, 2, 3, 45, 9]));
