const calculate = require('../calculadora');



test('Testando a soma de uma função', ()=>{
    expect(calculate.adicionar(1,2)).toBe(3);
})

test('Testando a subtração de uma função', ()=>{
    expect(calculate.subtrair(10,5)).toBe(5);
})

test('Testando a multiplicação de uma função', ()=>{
    expect(calculate.multiplicar(10,4)).toBe(40);
})

test('Testando a divisão de uma função', ()=>{
    expect(calculate.dividir(40,2)).toBe(20);
})
