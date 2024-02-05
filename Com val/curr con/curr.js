const fromamountelement = document.querySelector('.amount');
const convertedamountelement = document.querySelector('.convertedamount');
const fromCurrencyelement = document.querySelector('.fromCurrency');
const toCurrencyelement = document.querySelector('.toCurrency');
const resultelement = document.querySelector('.result');

// Array to populate the select tags with these coutries
const countries = [
    {code: "USD", name: "United States Dollar" },
    {code: "INR", name: "Indian Rupee" },
];

//Showing countries from array to selesct tag
countries.forEach(country => {
    const option1 = document.createelement('option');
    option1.value = contry.code;    
    option1.textContent = '${country.code} (${country.name})'; 
    fromCurrencyelement.appendChild(option1);
    
    const option2 = document.createelement('option');
    option2.value = contry.code;    
    option2.textContent = '${country.code} (${country.name})'; 
    toCurrencyelement.appendChild(option2);
    
});