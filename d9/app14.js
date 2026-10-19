function findMinMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { "Mix Number:- ": max, "Min Number:- ": min };
}
console.log(findMinMax([1, 2, 3, 45, 9]));
