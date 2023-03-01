/*Teste 2
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function fibonacci(value) {
    let fibo = [0, 1, 1, 2];


    while (fibo[fibo.length - 1] <= value) {
        let last = fibo[fibo.length - 1];
        let secToLast = fibo[fibo.length - 2];

        fibo.push(last + secToLast);

        console.log(fibo[fibo.length - 1]);
    }
    return fibo.find(item => item == value ) ? `${value} faz parte da sequência fibonacci` : `${value} não faz parte da sequência fibonacci`;
}

(function isFibo() {

    rl.question("Digite o número a ser verificado se faz parte da sequência fibonnaci: ", value => {
        console.log(fibonacci(value));
        rl.close();
    });

    rl.on("close", function () {
        console.log("\nbye");
        process.exit(0);
    });
})();