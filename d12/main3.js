let a1 = [1, 2, 3, 4, 5]
let a2 = [3, 4, 5, 6, 7]
let common =a1.filter(num => a2.includes(num))
console.log(common)