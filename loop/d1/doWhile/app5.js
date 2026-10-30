let n = 0,
  count = 0;
do {
  count++;
  n = Math.floor(n / 10);
} while (n > 0);
console.log(count);
