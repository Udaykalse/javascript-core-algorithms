let num = 8;

function primeNum(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let is_Prime = primeNum(num);

if (is_Prime) {
  console.log("Is a Prime Number");
} else {
  console.log("Is Not a Prime Number");
}





// let is_Prime = true;
// let num = 9;

// function primeNum(n) {
//   if (n <= 1) return false;
  
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false; // Found a factor, not prime
//     }
//   }
  
//   return true; // No factors found, is prime
// }

// is_Prime = primeNum(num);

// if (is_Prime) {
//   console.log(`${num} is a Prime Number`);
// } else {
//   console.log(`${num} is Not a Prime Number`);
// }