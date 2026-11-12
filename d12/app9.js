let num = 123;
let strNumber = num.toString();
let reverse_Number = "";

for (let i = strNumber.length - 1; i >= 0; i--) {
  reverse_Number += strNumber[i];
}
let newNum = Number(reverse_Number)
console.log(typeof(newNum))
console.log(newNum)
