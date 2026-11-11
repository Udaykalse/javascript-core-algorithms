const employees = [
  { first: "Sid", last: "K", salary: 5000 },
  { first: "Amey", last: "Z", salary: 1500 },
  { first: "Parvej", last: "S", salary: 1000 },
];

const formatted = employees.map(function (emp) {
  return {
    fullName: `${emp.first} ${emp.last}`,
    bonus: emp.salary + emp.salary * 0.1,
  };
});

console.log(formatted)