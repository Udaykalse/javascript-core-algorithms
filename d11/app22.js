function fact(num) {
  let res = 1;
  while (num > 1) {
    res *= num;
    num--;
  }
  return res;
}
console.log(fact(5))
