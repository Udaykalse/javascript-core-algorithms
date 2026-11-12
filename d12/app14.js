let num = 153;
let temp = num
let sum = 0
let power = String(num).length;

while(temp > 0){
    let digit = temp % 10;
    sum += digit ** power

    temp= Math.floor(temp / 10); 
}
if(sum === num){
    console.log("Armstrong Number")
}else{
    console.log("Not Armstrong Number")

}