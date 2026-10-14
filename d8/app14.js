function secondLargest(arr) {
  // if(arr.length < 2){
  //     return ""
  // }
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}

console.log(secondLargest([1, 4, 5, 2, 8, 0, 34, 1]));
