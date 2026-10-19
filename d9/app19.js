greet();

function greet() {
  console.log("Hello");
}
// Hello
sayHi();
var sayHi = function () {
  console.log("Hi");
};

// Error :- TypeError: sayHi is not a function
