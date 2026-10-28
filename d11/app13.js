function findMostFrequent(arr) {
  if (arr.length === 0) return null;
  const frequency = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  let maxFreq = 0;
  let mostFreq = arr[0];

  for (let num in frequency) {
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mostFreq = Number(num);
    }
  }
  return mostFreq;
}
const numbers = [-1, 2, -1, 3, -1, 2];
console.log(findMostFrequent(numbers));
