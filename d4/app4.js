function moveZeroes(nums) {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = nums[i];
      nums[i] = temp;
      lastNonZeroFoundAt++;
    }
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));