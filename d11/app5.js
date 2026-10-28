const entred = [1111, 2222, 1234];
let i = 0,
  pin;
do {
  pin = entred[i++];
} while (pin !== 1234);
console.log("Unclocked after ", i, "tries");
