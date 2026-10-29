const fact = (num) =>
  num === 0 || num === 1
    ? 1
    : Array.from({ length: num }, (_, i) => i + 1).reduce(
        (acc, num) => acc * num,
        1,
      );
console.log(fact(5))