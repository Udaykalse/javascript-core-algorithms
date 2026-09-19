function countCharOccurrences(str) {
  let counts = {};
  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}

console.log(countCharOccurrences("javascript"));