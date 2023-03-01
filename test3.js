/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

import { faturamento} from './data/faturamento.js'

const min = faturamento.reduce((prev, curr) => {
    if(curr.valor == 0)
        return prev;
    return curr.valor < prev ? curr.valor : prev;
}, Infinity);

const max = faturamento.reduce((prev, curr) =>{
    return curr.valor > prev ? curr.valor : prev;
}, 0);

const total = faturamento.reduce((total, curr) => {    
    return total + curr.valor;
}, 0);


let daysNonZero = 0;
faturamento.forEach(item => {
    if(item.valor > 0)
        daysNonZero++;
})

const average = total / daysNonZero;

let count = 0;
faturamento.forEach(item => {
    if(item.valor > average){ count++; }
})

console.log(`
• O menor valor de faturamento ocorrido em um dia do mês: ${min} \n
• O maior valor de faturamento ocorrido em um dia do mês: ${max} \n
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${count} \n`);
