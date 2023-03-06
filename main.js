/*
Místo pro váš program
*/

// Výplata

const salary = (wage, hours, days) => {
    return Math.round((wage * hours) * days);
}

const taxed = (mount, percent) => {
    return Math.round(mount * ((100 - percent) / 100));
}

/*
const wage = 148;
const hours = 8;
const days = 21;
const beforeTaxation = salary(wage, hours, days);
const afterTaxation = taxed(beforeTaxation, 15);

document.body.innerHTML = `
	<p>Wage: ${wage} Kč</p>
	<p>Hours: ${hours}</p>
	<p>Days: ${days}</p>
	<p>Before taxation: ${beforeTaxation} Kč</p>
	<p>After taxation: ${afterTaxation} Kč</p>
`;
*/

// Kalkulačka

const calculate = (number1, operation, number2) => {

    if (operation === '+') {
        return number1 + number2;
    } else if (operation === '-') {
        return number1 - number2;
    } else if (operation === '*') {
        return number1 * number2;
    } else if (operation === '/') {
        return number1 * number2;
    } else {
        return false;
    }
}