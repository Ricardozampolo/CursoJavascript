function parimpar(n) {
    if(n%2 == 0){
        return 'par';
    } else {
        return 'ímpar';
    }
}

var num = parimpar(10);

// console.log(num);
console.log(`O número selecionado é ${num}`);

//Podemos escrever direto na tela também sem criar uma variável para guardar o valor 
//Exemplo

// console.log(parimpar(223));