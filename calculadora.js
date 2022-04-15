function calcTabuada(){
        var rTabuada;
        rTabuada = (num1*multiplicador);
    return `${num1} x ${multiplicador} é igual a ${rTabuada}!`;
}

function calcMultiplica(){
        var rMultiplica;
        rMultiplica = (num1*num2);
    return `${num1} X ${num2} = ${rMultiplica}`;
}

function calcDivisao(){
    var rDivisao;
    
    rDivisao = (num1/num2);
    return `${num1} % ${num2} é igual a ${rDivisao}!`;
   
}

function calcSoma(){
        var rSoma;
        rSoma = (num1)+(num2);
    return `${num1} + ${num2} é igual a ${rSoma}!`;
}

function calcSubtracao(){
    var rSubtracao;
    if (num1 > num2){
        rSubtracao = (num1-num2);
    return `${num1} - ${num2} é igual a ${rSubtracao}!`;    
    } else {
        rSubtracao = (num2-num1);
    return `${num2} - ${num1} é igual a ${rSubtracao}!`;
    }
}

var num1; var num2;
var multiplicador = 0;

var opcao = prompt (`Qual operação deseja fazer?\nTabuada;\nSoma;\nSubtração;\nMultiplicação;\nDivisão;`);

switch (opcao){
    case 'tabuada':
        num1 = parseInt(prompt(`Qual(is) número(s) deseja testar?`));
    
    if (num1 > 0){
        document.write (`<h2>Tabuada de ${num1}:</h2><br>`);

    
        for (multiplicador = 0; multiplicador <= 10; multiplicador++){
            document.write (`${calcTabuada()}<br>`);
        }
    } else {
        document.write (`<h1>Tabuada de ${num1}???? TEM CERTEZA?</h1><br>`);
        document.write (`Não rolou!<br>`);
    }
    break;
    
    case 'soma':
        num1 = parseInt(prompt(`Número 1:\n`));
        num2 = parseInt(prompt(`Número 2:\n`));

        document.write (`${calcSoma()}`);
    break;

    case 'subtracao':
        num1 = parseInt(prompt(`Número 1:\n`));
        num2 = parseInt(prompt(`Número 2:\n`));

        document.write (`${calcSubtracao()}`);
    break;

    case 'multiplicacao':
        num1 = parseInt(prompt(`Número 1:\n`));
        num2 = parseInt(prompt(`Número 2:\n`));

        document.write (`${calcMultiplica()}`);
    break;

    case 'divisao':
        num1 = parseInt(prompt(`Número 1:\n`));
        num2 = parseInt(prompt(`Número 2:\n`));

        document.write (`${calcDivisao()}`);
    break;
}

