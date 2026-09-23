function greet(greeting){
    return function(name){
        return `${greeting}, ${name}`
    };
}

const sayHello = greet("Hello");
console.log(sayHello("Amey"))