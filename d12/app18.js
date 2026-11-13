let arr = [10, 9, 6, 44];
let largest = arr.reduce((max,num)=>{
    return num > max ? num : max;
},arr[0])
console.log(largest)