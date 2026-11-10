let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let even = arr.filter((val) => val % 2 === 0);
let odd = arr.filter((val) => val % 2 !== 0);;

console.log(`Even Numbers:- ${even}`);
console.log(`Odd Numbers:- ${odd}`);
