const findMax = (arr) => {
  let max = arr[0];
  for (const num of arr) if (num > max) max = num;
  return max;
};

console.log(findMax([3, 8, 0, 4]));
