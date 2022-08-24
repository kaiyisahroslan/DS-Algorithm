let n1 = parseInt(prompt('Input number'));

// Odd or even
let number = 0;

if (n1%2 === 0) {
    number = true;
} else {
    number = false;
}

if (number === true) {
    console.log(n1 + ' is even')
}
else {
    console.log(n1 + ' is odd')
}

// Sum
let sum = 0;

// while ( n1 > 0) {
//     sum += n1;
//     n1--;
// }

for (let i = 1; i <= n1 ; i++) {
    sum += i;
}

// Factorial
let factorial = 1;

for (let i =1; i <= n1; i++) {
    factorial *= i;
}

console.log('Sum of all numbers is ' + sum);
console.log(`The factorial of ${n1} is ${factorial}`);