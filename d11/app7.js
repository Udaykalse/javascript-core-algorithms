const rolls = [2, 5, 3, 6];
let i = 0,
  roll;
do {
  roll = rolls[i++];
  console.log("Rolled:- ", roll);
} while (roll !== 6);
