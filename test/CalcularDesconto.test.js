const calculandoDesconto = require("../validarDesconto");

test("Deve calcular o desconto corretamente", () => {
  expect(calculandoDesconto(100, 10)).toBe(90);
});

test("Deve retornar um erro caso o valor do desconto seja negativo", () => {
  try {
    calculandoDesconto(100, -2);
  } catch (error) {
    expect(error.message).toBe("Desconto invalido");
  }
});


test('Dever retornar um erro caso o valor de desconto seja maior que 100', () => {
    try {
        calculandoDesconto(100,101);
    } catch (error) {
        expect(error.message).toBe("Desconto invalido");
    }
});