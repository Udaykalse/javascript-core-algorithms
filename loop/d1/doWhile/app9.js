const attempts = ["abc", "123", "secret"];
let tries = 0,
  loggedIn = false;
while (tries < 3 && !loggedIn) {
  loggedIn = attempts[tries] === "secret";
  tries++;
}
console.log(loggedIn, tries);
