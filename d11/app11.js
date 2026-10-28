function findFirstLast(arr) {
  if (arr.length === 0) return null;
  const freq = {};
  let maxFreq = 0;
  let mostFreq = arr[0];
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      mostFreq = num;
    }
  }
  return mostFreq;
}
console.log(findFirstLast([1, 3, 2, 3, 4, 1, 3, 5]));
