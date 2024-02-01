
function convertNumber(number) {
    let binary = number.toString(2);
    let octal = number.toString(8);
    let hexadecimal = number.toString(16).toUpperCase();

    return {
        decimal: number,
        binary: binary,
        octal: octal,
        hexadecimal: hexadecimal
    };
}

let decimalNumber = 42;
let result = convertNumber(decimalNumber);

console.log(`Decimal: ${result.decimal}`);
console.log(`Binary: ${result.binary}`);
console.log(`Octal: ${result.octal}`);
console.log(`Hexadecimal: ${result.hexadecimal}`);
