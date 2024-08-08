const calcularDesconto = (preco, desconto) =>{
    if(desconto < 0 || desconto > 100){
        throw new Error('Desconto invalido');
    }

    return preco - (preco * desconto / 100);
}

module.exports = calcularDesconto;