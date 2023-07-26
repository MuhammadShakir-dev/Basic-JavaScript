let usrName = prompt("Enter your name : ");
let prdOpt = prompt(`Hello ${usrName} Select you desired fruit : Apple, Mangos, Oranges : `) 
let qty = prompt(`Select quantity of your product : 6 or 12 : `);

if(qty === 6){
    let total1 = qty * 15;
    console.log(`You bought ${qty} ${prdOpt} your total is :  ${total1}`)
} else {
    let total2 = qty * 15;
    console.log(`You bought ${qty} ${prdOpt} your total is  : ${total2}`)
}
