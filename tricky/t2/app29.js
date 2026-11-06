function logInfo(...args) {
  console.log(this.label, args);
}
const config = { label: "Test" };
logInfo.call(config, 1, 2, 3);
