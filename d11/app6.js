const inputs = [-5, 200, 25];
let i = 0,
  age;
do {
  age = inputs[i++];
} while (age < 1 || age > 120);
console.log(age);
