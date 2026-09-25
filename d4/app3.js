function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let writePointer = 1;

  for (let readPointer = 1; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[readPointer - 1]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }
  return writePointer; 
}
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k);
console.log(nums.slice(0, k)); 