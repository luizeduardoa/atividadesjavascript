/*Exercício 1 – Bolo de Pote (Cálculo de Lucro)
Pergunta:
Uma empreendedora vende bolo de pote por R$ 12,00 cada.
O custo de produção por unidade é R$ 5,50.

Se ela vendeu 30 unidades, calcule:
O lucro por unidade
O lucro total

Exiba o resultado utilizando concatenação, declarando variáveis e constantes e adicionando comentários no código.*/

const precobolo = 12.00;
let custo = 5.50;
const unidade = 30;

let lucrounidade = precobolo - custo;
let lucrototal = lucrounidade * unidade;

console.log("O lucro por unidade é " + lucrounidade);
console.log("O lucro total para " + unidade + " unidades" + " é de " + lucrototal);


/* Exercício 2 – Confeitaria (Desconto)
Pergunta:
Uma confeitaria vende um bolo por R$ 150,00.
Um cliente recebeu 10% de desconto.
Calcule:
O valor do desconto
O valor final do bolo
Mostre o resultado utilizando interpolação.
Você gostaria que eu também apresentasse a resolução matemática ou o exemplo de código para esse exercício? */

const precopote = 150.00
let desconto = 10

let valordesconto = precopote * (desconto / 100);
let valorfinal = precopote - valordesconto;

console.log(`O valor do desconto foi de R$ ${valordesconto}`);
console.log(`O valor final do bolo foi de R$ ${valorfinal}`);


// Pergunta 03
let venda = 800;
let comissao = venda * 0.15;
 
// interpolação
console.log(`O valor da comissão é R$ ${comissao}`);
 
 
// Pergunta 04
 
let valorSessao = 120;
let quantidadeSessoes = 40;
 
let faturamento = valorSessao * quantidadeSessoes;
 
console.log("O faturamento mensal é R$ " + faturamento);
