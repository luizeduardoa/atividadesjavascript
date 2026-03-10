//Exercicio 1

const sabores = ["Chocolate", "Morango", "Banana", "Red Velvet"];

sabores.push("Abacaxi");
console.log(sabores);

sabores.pop();
console.log(sabores);

console.log("Quantide de sabores disponiveis é " + sabores.length);

//Exercicio 2

const clientes = ["Evellyn", "Maria", "Julia", "Pedro", "Carlos"];

console.log("Cliente: " + clientes[0]);
console.log("Cliente: " + clientes[3]);

const carlos = clientes.includes("Carlos");
console.log(carlos);

console.log("Maria está na posição: " + clientes.indexOf("Maria"));

//Exercicio 3

const pedidosManha = ["Torta de Maça", "Torta de limão", "Torta de morango"];

const pedidosTarde = ["Bolo de chocolate", "Bolo de fuba", "Bolo de milhoo"];
    
const todosPedidos = pedidosManha.concat(pedidosTarde);
console.log(todosPedidos);

//Exercício 4 - Controle de serviços - Ateliê de costura
const servicos = ["barra de calça", "ajuste de vestido", "reforma de camisa"];
 
console.log(servicos);
 
const removeServico = ["barra de calça", "ajuste de vestido", "reforma de camisa"];
 
const primeiroServico = removeServico.shift();
console.log(removeServico);
 
const novoServico = ["costura", "ajuste de vestido", "reforma de camisa"];
 
novoServico.unshift();
console.log(novoServico);
console.log("\n");
 
//Exercício 5 - Agenda de pacientes - Psicólogo
const pacientes = ["Maria", "Ana", "Marcos", "Tom"]
 
for (let p = 0; p < pacientes.length; p++) {
}
 
pacientes.forEach((nome, indice) => {
    console.log(indice, nome);
});
console.log("\n");
 
//Exercício 6 - Horários de atendimento (Clínica de psicologia)
const agenda = [
    ["08:00", "09:00", "10:00"],
    ["14:00", "15:00", "16:00"]
];
 
console.log("Agenda - Horários");
console.log("---------------");
 
for (let i = 0; i < agenda.length; i++) {
    for (let j = 0; j < agenda[i].length; j++) {
        console.log(`[${i}][${j}] = ${agenda[i][j]}`);
    }
}