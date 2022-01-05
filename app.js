// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)

// declaramos una funcion con el mismo nombre "formEuroToDollar"
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (valueInEuro) => {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = (valueInUSD) => {
    let valueInYen = (valueInUSD / oneEuroIs.USD) * oneEuroIs.JPY;
    valueInYen = parseFloat(valueInYen.toFixed(2));
    return valueInYen;

}

const fromYenToPound = (valueInYen) => {
    let valueInPound = (valueInYen / oneEuroIs.JPY) * oneEuroIs.GBP;
    valueInPound = parseFloat(valueInPound.toFixed(2));
    return valueInPound;
}
//function to round to 2 decimal digits
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };