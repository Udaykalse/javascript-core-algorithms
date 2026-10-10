function greet(name, callback) {
  callback(`Hello, ${name}`);
}

greet("Gojo", (message) => console.log(message));
