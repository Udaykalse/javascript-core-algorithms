function multiply(a){
    return function(b){
        return function(c){
            return a * b * c
        }
    }
}

console.log(multiply(2)(4)(9))