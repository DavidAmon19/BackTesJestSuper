const verificarIdade = (idade) =>{
    if(idade < 0){
        throw new Error('Idade não pode ser negativa');
    }

    return idade >=18 ? 'Adulto': 'Menor de idade';
}



module.exports = {verificarIdade};