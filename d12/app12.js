let num = 7;
let isPrime = num > 1;

for (let i = 2; i <= Math.sqrt(num) && isPrime; i++) {
  if (num % i === 0) {
    isPrime = false;
  }
}
console.log(isPrime ? "Prime" : "Not Prime");
