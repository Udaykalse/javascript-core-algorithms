let arr = [67, 43, 12, 7, 8, 5, 4, 8, 9, 90, 87, 65];

const secondLargest = arr.sort((a, b) => a - b);
console.log(secondLargest.reverse()[1]);
