const { verificarIdade } = require("../sistemaIdade");

test('Deve retornar "Adulto" para a idade 18', () => {
  expect(verificarIdade(18)).toBe("Adulto");
});


test('Deve retornar "Menor de idade" para idade 17', () => {
  expect(verificarIdade(17)).toBe('Menor de idade')
});

test('Deve lançar um erro para idade negativa', ()=>{
  try {
    verificarIdade(-1);
  } catch (e) {
    expect(e.message).toBe('Idade não pode ser negativa');
  }
})