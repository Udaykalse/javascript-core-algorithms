const nums = [1, 2, 3, 4, 5];

function double(nums){
    let total = nums.reduce((a,b)=>a+b)
    return total
}
console.log(double(nums))