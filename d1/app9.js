let num = 456789;
let count = num === 0 ? 1 : 0;

let temp = Math.abs(num);
while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

console.log(`Digit count: ${count}`);