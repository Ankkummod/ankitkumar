function calculateFactorial(number) {
    if (number < 0) {
        return "Invalid input. Factorial is not defined for negative numbers.";
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}
const userInput = prompt("Enter a number to calculate its factorial:");
const number = parseInt(userInput);

if (!isNaN(number)) {
    const result = calculateFactorial(number);
    console.log(`The factorial of ${number} is: ${result}`);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
