const  Validacao  = require("../validarEmail");



test('Deve retornar true para um email válido', () => {
    expect(Validacao.validarEmail('teste@dominio.com')).toBe(true);
});


test('Deve retornar false para um email sem "@"', ()=>{
    expect(Validacao.validarEmail('testedominio.com')).toBe(false);
});


test('Deve retornar false para um email sem dominio', ()=>{
    expect(Validacao.validarEmail('teste.com')).toBe(false);
});