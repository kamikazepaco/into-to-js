var age = 25

console.log(`You are ${age} years old.`);

age += 10

console.log(`In 10 years, you will be ${age} years old`);

age += 10
console.log(`In 20 years, you will be ${age} years old`);

age += 10
console.log(`In 30 years, you will be ${age} years old`);


//Cleaner way provided by Launch School
//lesson learned: operations can be performed inside of console.log
let age2 = 20;
console.log(`You are ${age2} years old.`);
console.log(`In 10 years, you will be ${age2 + 10} years old.`);
console.log(`In 20 years, you will be ${age2 + 20} years old.`);
console.log(`In 30 years, you will be ${age2 + 30} years old.`);
console.log(`In 40 years, you will be ${age2 + 40} years old.`);

//update from I/O section
//mistake log: forgot to  add Number() function and to capitalize the N
//could also leave age alone and parseInt() afterwards
rlSync = require('readline-sync');
let age3 = Number(rlSync.question('How old are you? '));
console.log(`In 10 years, you will be ${age3 + 10} years old.`);
console.log(`In 20 years, you will be ${age3 + 20} years old.`);
console.log(`In 30 years, you will be ${age3 + 30} years old.`);
console.log(`In 40 years, you will be ${age3 + 40} years old.`);