/*
FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - print out the number if neither.
        * "print = console.log"
*/

let fb = 15;

if (fb % 3 == 0, fb % 5 != 0) {
    console.log('Fizz');
} else if (fb % 5 == 0, fb % 3 != 0) {
    console.log('Buzz');
} else if (fb % 3 == 0 && fb % 5 == 0) {
    console.log('FizzBuzz');
} else {
    console.log(fb);
} 

let fizzB;

for (let i = 1; i <= 100; i++) {
    fizzB = i;
    if (fizzB % 3 == 0 && fizzB % 5 == 0){
     console.log('FizzBuzz');
    } else if (fizzB % 5 == 0) {
        console.log('Buzz');
    } else if (fizzB % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(fizzB);
    }
}