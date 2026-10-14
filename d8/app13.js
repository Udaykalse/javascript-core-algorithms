const user = [
  { id: 1, name: "amey", email: "amey@mail.com" },
  { id: 2, name: "amen", email: "amen@mail.com" },
];

const email = user.map((user) => user.email);
console.log(email);

for (let i = 0; i < user.length; i++) {
  console.log(user[i].email);
}
