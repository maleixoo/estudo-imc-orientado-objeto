class Pessoa{
    constructor (nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    toCalcImc(){
        let imc 
        imc = this.peso / (this.altura * this.altura)
        console.log(`Uma pessoa chamada ${this.nome}, que tenha ${this.peso}kg e ${this.altura} de altura tem um indice de IMC de ${imc.toFixed(2)}.`)  
        return imc
    }    
}
//Entrada de dados para o metodo.
resultado = new Pessoa('Matheus', 88, 1.85)

//Atribuição do return do metodo a uma váriavel e impressão do console.log desse metodo.
imc = resultado.toCalcImc()

//Função para classificar o IMC.
function classificarImc(imc){
    if (imc < 18.5){
        return 'Abaixo do peso'
    } else if (imc > 18.5 && imc < 24.9){
        return 'Peso ideal'
    } else if (imc >= 25 && imc < 29.9){
        return 'Levemente acima do peso'
    } else if (imc >= 30 && imc < 34.9){
        return 'Obesidade grau I'
    } else if (imc >= 35 && imc < 39.9){
        return 'Obesidade grau II'
    } else {
        return 'Obesidade III'
    }
}

//Chamada da função.
imcFin = classificarImc(imc)

//Impressão de mensagem final na tela.
console.log(`Com base nessas informações a sua classificação na tabela do IMC é: ${imcFin}.`)