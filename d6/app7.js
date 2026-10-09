function subsets(nums) {
  let res = [[]];
  for (const num of nums) {
    const len = res.length;
    for (let i = 0; i < len; i++) {
      res.push([...res[i], num]);
    }
  }
  return res

}

console.log(subsets([1,2,3]))
