console.log("Let")

let func = [];
for (let i = 0; i < 3; i++) {
  func.push(function () {
    return i;
  });
}

console.log(func[0](), func[1](),func[2]())

console.log("===============================")
console.log("Var")
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(function () {
    return i;
  });
}

console.log(funcs[0](), funcs[1](),funcs[2]())