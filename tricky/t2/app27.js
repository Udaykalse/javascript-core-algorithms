const obj1 = {val:100}
const obj2 = {val:200}
function printVal(){
    console.log(this.val)
}

printVal.call(obj1)
printVal.call(obj2)