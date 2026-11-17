const users = [
  { id: 1, name: "Uday", email: "uday@gmail.com" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com" },
  { id: 3, name: "Amit", email: "amit@gmail.com" }
];

for(let i = 0 ; i < users.length;i++){
    console.log(users[i].name, "|", users[i].email)
}

users.map((a)=>console.log(a.name , " | ", a.email))