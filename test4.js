/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const faturamento = [
    { 'SP' : '67.836,43' },
    { 'RJ' : '36.678,66' },
    { 'MG' : '29.229,88' },
    { 'ES' : '27.165,48' },
    { 'Outros' : '19.849,53'}
]

let total = 0;
for (let i = 0; i < faturamento.length; i++){
    const value = getValueFormated(faturamento[i])
    total += parseFloat(value);
}

for (let i = 0; i < faturamento.length; i++){
    const percent = getValueFormated(faturamento[i]) * 100 / total;
    console.log(`${Object.keys(faturamento[i])} : ${(percent).toFixed(2)}%`)
}

function getValueFormated(value){
    return Object.values(value)[0].replace(',','.').replace('.', '');
}