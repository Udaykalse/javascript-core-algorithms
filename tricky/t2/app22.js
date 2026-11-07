function greet(){
    console.log(`Hello, ${this.name}`)
}
const user = {name:"Amey"}
greet.call(user)