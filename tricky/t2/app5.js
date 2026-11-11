const fruits = ["apple", "banana", "cherry"];
const indexed = fruits.map(function (ft, idX) {
  return `${idX + 1}. ${ft}`;
});

console.log(indexed);
