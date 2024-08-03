alert('Boas vindas ao jogo do numero secreto');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolhar um numero entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O numero secreto e menor que ${chute}`);
        } else {
            alert(`O numero secreto e maior que ${chute}`);
        }
        tentativas++;

    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' // tentativa e maior que 1 ? se for exiba tentativas se nao for exiba tentativa
alert(`Voce acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert(`Acertou miseravi ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Acertou miseravi ${numeroSecreto} com ${tentativas} tentativa`)
// }
