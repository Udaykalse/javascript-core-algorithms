function increment() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = increment();
console.log(counter())
console.log(counter())

