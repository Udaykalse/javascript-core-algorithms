const a ={x : {y:1}};
const b = structuredClone(a)
b.x.y = 2
console.log(a.x.y)