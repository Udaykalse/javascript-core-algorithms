const results = [false, false, true];
let attempts = 0,
  success;
do {
  success = results[attempts++];
  console.log("Attempt", attempts, success ? "success" : "failed");
} while (!success);
