var input = document.getElementById('input');
var converted = document.getElementById('converted');
var pickCurrency = document.getElementById('pick-currency');
var currencyConverter = document.getElementById('currency-converter');
function convert() {
    const values = {
        byr: 0.47,
        rub: 0.015,
        usd: 1,
        eur: 1.13
    }
    var convCurr = pickCurrency.value;
    var currConv = currencyConverter.value;
    converted.value = (values[convCurr] * input.value / values[currConv]).toFixed(2);
}
input.addEventListener('input', convert);
pickCurrency.addEventListener('change', convert);
currencyConverter.addEventListener('change', convert);