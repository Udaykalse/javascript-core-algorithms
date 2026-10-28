const payments = [200,300,500];
let i =0,paid = 0;
const bill =800;
do{
    paid+=payments[i++]
}while(paid<bill)
    console.log(paid)