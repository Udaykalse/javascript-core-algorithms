let marks = {
  Uday: 85,

  Sanmathi: 82,
  Aman: 70,
};
let result = Object.fromEntries(
  Object.entries(marks).sort((a, b) => a[1] - b[1]),
);
console.log(result);
// https://docs.google.com/spreadsheets/d/1NgzltqW7x3N_SQQqOT4Cn4_ALC14D3tIZanb17csaO0/edit?gid=358234465#gid=358234465
// https://linktokeep.com/