function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

const year = prompt("Enter a year:");
if (isLeapYear(parseInt(year))) {
    console.log('${year} is a leap year.');
} else {
    console.log('${year} is not a leap year.');
}
