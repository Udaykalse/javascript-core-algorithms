function createAdder(x){
    return function(y){
        return x + y;
    }
}

const addfive=createAdder(5);
console.log(addfive(16))