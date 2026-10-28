const answers = ["Delhi", "Mumbai", "Paris"];
let i = 0,
  answer;
do {
  answer = answers[i++];
} while (answer !== "Paris");
console.log("Correct After", i, "Attempts");
