let n = 0;
digit = 0;
do {
  digit++;
  n = Math.floor(n / 10);
} while (n > 0);
console.log(digit)