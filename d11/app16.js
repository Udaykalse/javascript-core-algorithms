let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];

for (let i = 0; i < n.length; i++) {
  if (n[i] % 2 === 0) {
    even.push(n[i]);
  } else {
    odd.push(n[i]);
  }
}
console.log(even);
console.log(odd)