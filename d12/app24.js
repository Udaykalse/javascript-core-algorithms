let outer = "i am outer";

function inner() {
  console.log(outer);
}

inner();

console.log("===================");

const user = {
  name: "Uday",
  city: "Nanded",
  add: {
    pin: 43125,
  },
};

console.log(user?.city)
console.log(user?.add?.city)