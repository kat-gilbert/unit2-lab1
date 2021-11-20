
let fullName = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let pineapplePizza = prompt("True or False, do you like pineapple on pizza?");

const lifeEvents = ["I was born in Troy, MI", "I went to Hope College", 
"I went to Junior Olympics when I was 14 years old. I placed 14th in the nation in the 800 meter event.",
"I'm a graduate of the Grand Circus Bootcamp"]

if (pineapplePizza === "true") {
    console.log(`My name is ${fullName} and i like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`);
}
    else {
        console.log(`My name is ${fullName} and I'm not into pineapples on pizza. I'm currently ${age} years old and my birthday is ${birthday}.`);
    }

for ( i = 0; i < lifeEvents.length; i++ ) {
    console.log(lifeEvents[i]);
}

let counter = 0;

 while (true) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
    }

    else {
    counter++;
    console.log(`5===5. It took ${counter} itirations to randomly count the number 5.`);
    break;
    }
}


