const ValidarSenha = require('../validarSenha');


test('Deve retornar true para uma senha forte', () => {
    expect(ValidarSenha('Davi@123')).toBe(true);
});


test('Deve retornar false se a senha vier sem caracteres especiais', () => {
    expect(ValidarSenha('Davi123')).toBe(false);
});


test('Deve retornar false se a senha não vier com numeros', () => {
    expect(ValidarSenha('Davi@abc')).toBe(false);
});

test('Dever retornar false se a senha for menor que 8 caracteres', () => {
    expect(ValidarSenha('Davi@a')).toBe(false);
});