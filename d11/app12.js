function findMostFrequent(arr) {
  if (arr.length === 0) return null;
  arr.sort((a, b) => a - b);
  let maxFreq = 1;
  let currentFreq = 1;
  let mostFreq = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentFreq++;
    } else {
      currentFreq = 1;
    }
    if (currentFreq > maxFreq) {
      maxFreq = currentFreq;
      mostFreq = arr[i];
    }
  }
  return mostFreq;
}
const numbers = [-1, 2, -1, 3, -1, 2];
console.log(findMostFrequent(numbers));
