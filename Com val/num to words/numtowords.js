function convertToWords() {
    var numberInput = document.getElementById("numberInput").value;
    var result = document.getElementById("result");

    if (isNaN(numberInput) || numberInput === "") {
        result.textContent = "Please enter a valid number.";
        return;
    }

    var words = convertNumberToWords(Number(numberInput));

    result.textContent = "In words: " + words;
}
function convertNumberToWords(number) {
    var units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (number === 0) {
        return 'Zero';
    }

    if (number < 0) {
        return 'Negative ' + convertNumberToWords(Math.abs(number));
    }

    var words = '';

    if (Math.floor(number / 1000000000) > 0) {
        words += convertNumberToWords(Math.floor(number / 1000000000)) + ' Billion ';
        number %= 1000000000;
    }

    if (Math.floor(number / 10000000) > 0) {
        words += convertNumberToWords(Math.floor(number / 10000000)) + ' Crore ';
        number %= 10000000;
    }

    if (Math.floor(number / 1000000) > 0) {
        words += convertNumberToWords(Math.floor(number / 1000000)) + ' Million ';
        number %= 1000000;
    }

    if (Math.floor(number / 100000) > 0) {
        words += convertNumberToWords(Math.floor(number / 100000)) + ' Lakh ';
        number %= 100000;
    }

    if (Math.floor(number / 1000) > 0) {
        words += convertNumberToWords(Math.floor(number / 1000)) + ' Thousand ';
        number %= 1000;
    }

    if (Math.floor(number / 100) > 0) {
        words += convertNumberToWords(Math.floor(number / 100)) + ' Hundred ';
        number %= 100;
    }

    if (number > 0) {
        if (words !== '') {
            words += 'and ';
        }

        if (number < 10) {
            words += units[number];
        } else if (number < 20) {
            words += teens[number - 10];
        } else {
            words += tens[Math.floor(number / 10)];
            if (number % 10 > 0) {
                words += '-' + units[number % 10];
            }
        }
    }

    return words.trim();
}
