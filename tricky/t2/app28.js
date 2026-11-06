function multiply(x,y){
    console.log(x*y*this.factor);
}
const etxt = {factor:5}
multiply.call(etxt,2,3)