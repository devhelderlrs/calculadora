function calculaTabuada(){
    var resultadoTabuada;
    resultadoTabuada = (num1*multiplicador);
    return `${num1} x ${multiplicador} é igual a ${resultadoTabuada}!`;
}

// function calculadora(){

// }

var num1 = prompt("Qual número deseja testar?");
var multiplicador = 0;
var opcao = prompt ("Qual operação deseja fazer?");

opcao.toLowerCase(opcao);

    switch(opcao){
    
    case 'tabuada':
        if (num1 > 0){

            console.log (`Tabuada de ${num1}:\n`);

            for (multiplicador = 0; multiplicador <= 10; multiplicador++){
                
                console.log (calculaTabuada());

            }
        } else {

                console.log (`Tabuada negativa não dá, irmão.`);
        }
    }
