console.log("--------Extended Challenges---------");


let hours = parseInt( prompt("How many hours did you work?"));
let pay = hours * 10;
let wage = 10;

if (hours <= 40) {
    pay = pay;
}
    else if (hours > 40) {
    let extraHours = (hours - 40);
    let extraPay = extraHours * 15;
    pay = (40 * wage) + extraPay;
    wage = pay / hours;
    
console.log(`You worked ${extraHours} hours over the standard 40 hours.`)  
}

console.log(`You worked ${hours} hours this pay period, so your average hourly wage was $${wage}, and your total gross pay is $${pay}.`);



console.log("--------How to become a millionaire---------")

let wageHourly = 12;
let hoursWorked = 40;
let paycheck = 0;
let numberOfWeeks = 0;


while ( paycheck <= 1000000 ) {
    paycheck += wageHourly * hoursWorked;
    numberOfWeeks += 1;
}
 console.log(`Making $${wageHourly}/hr and working ${hoursWorked} hours a week, it will take you ${numberOfWeeks} weeks to make 1 million dollars`);

