const a = 12, b = 15;

let gcd = a, tempB = b;
while (tempB !== 0) {
    let temp = tempB;
    tempB = gcd % tempB;
    gcd = temp;
}

const lcm = (a * b) / gcd;
console.log(`LCM: ${lcm}`);