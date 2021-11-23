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