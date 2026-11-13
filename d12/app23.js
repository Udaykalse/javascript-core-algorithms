function duplicatesElements(arr) {
  return [...new Set(arr)];
}

console.log(duplicatesElements([1, 2, 1, 3, 2, 1, 2, 3]));
