const users = [
  { id: 1, name: "Aman", age: 25 },
  { id: 2, name: "Amey", age: 26 },
  { id: 3, name: "Parvej", age: 27 },
];

const names = users.map(function(user){
    return user.name
})

console.log(names)