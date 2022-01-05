// importar la funciones del archivo app.js
const { sum, fromYenToPound, fromEuroToDollar, fromDollarToYen } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 447.6 yen", function(){    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(373.04); //1 dolar son 447.65 yenes, entonces 3.5 dolares deberian ser = (3.5 * 127.9)
})

test("One Yen should be 0.02 pound", function(){ 
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.02); // 3.5 yen son 2.8 pounds, entonces 3.5 yenes deberian ser = (3.5 * 0.8)
})