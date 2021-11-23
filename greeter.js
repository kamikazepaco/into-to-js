const NAME = 'Victor'
const NAME_LOOP = 'Victoria'

console.log(`Good morning, ${NAME}`);
console.log(`Good afternoon, ${NAME}`);
console.log(`Good evening, ${NAME}`);

//run as loop?
greet = ''

for (let i = 0; i < 3; i++)  {
    if (i < 1) {
        console.log(`Good morning, ${NAME_LOOP}`);
    } else if (i < 2) {
        console.log(`Good afternoon, ${NAME_LOOP}`);
    } else if (i < 3) {
        console.log(`Good evening, ${NAME_LOOP}`);
    }
}