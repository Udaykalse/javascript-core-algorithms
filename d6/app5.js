function topKwords(txt, k) {
  const words = txt.toLowerCase().match(/\b\w+\b/g) || [];
  const freqMap = new Map();

  for (const word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  return [...freqMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k);
}


const simpleTxt="JavaScript is great. JavaScript is flexible and JavaScript is popular.";

console.log(topKwords(simpleTxt,2))