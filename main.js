#! /usr/bin/env node
import inquirer from "inquirer";
function isPrime(n, divisor = 2) {
    if (n <= 2) {
        return (n == 2);
    }
    if (n % divisor == 0) {
        return false;
    }
    if (divisor * divisor > n) {
        return true;
    }
    return isPrime(n, divisor + 1);
}
const numb = await inquirer.prompt({
    name: "yourNumber",
    type: "input",
    message: "Enter a number: "
});
if (isPrime(numb.yourNumber)) {
    console.log(`${numb.yourNumber} is a prime number.`);
}
else {
    console.log(`${numb.yourNumber} is not a prime number.`);
}
