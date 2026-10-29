const fact = (function () {
  const cache = {};
  return function fact(num) {
    if (num === 0 || num === 1) return 1;
    if (cache[num]) {
      console.log("Value From Caeche");
      return cache[num];
    }
    cache[num] = num * fact(num - 1);
    return cache[num];
  };
})();

console.log(fact(5))