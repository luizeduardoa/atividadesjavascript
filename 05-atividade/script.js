//Exercicio 1
for (let i = 1; i <= 10; i++) {
    console.log("Bolo de pote produzido número: " + i);
}

//Exercicio 2

sabores = ["Cohocolate", "Morango", "Baunilha", "Red Velvet"];
sabores.forEach(function(sabor) {
    console.log("Sabor disponível: " + sabor);
});

 //Exercício 3 - Ateliê de Costura (for - Cálculo de Faturamento)

/*Pergunta:
Um ateliê realizou 5 serviços no dia, cada um no valor de R$200.
Utilize o laço for para calcular o faturamento total. Utilize a soma dentro do loop.*/

const valorServico = 200;
const quantidadeServico = 5;
let faturamentoTotal = 0; 

for (let i = 0; i < quantidadeServico; i++) {
    faturamentoTotal += valorServico;

    console.log(`O faturamento total do dia foi R$ ${faturamentoTotal},00 `);
}
    

//Exercício 4 - Psicólogo (forEach e Array - Lista de Pacientes)

/*Pergunta:
Um psicólog atendeu os seguintes pacientes:
-Ana
-Carlos
-Juliana
-Pedro 

Utilize forEach para exibir o nome da cada paciente atendido no dia. 
Utilize aqui concatenação na exibição*/

const pacientes = ["Ana", "Carlos", "Juliana", "Pedro"];

pacientes.forEach (function(nome){
    console.log("Paciente:" + nome);
});