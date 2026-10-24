const title = "hello World"
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");
console.log(title);
