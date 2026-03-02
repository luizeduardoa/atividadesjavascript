//Exercicio 1 

let vendeu = 35;
let meta = 30;

if (vendeu == meta) {
    console.log("Ela atingiu a meta");
}
else if (vendeu > meta){
    console.log("Ela superou a meta");
}
else {
    console.log("Ela não atingiu a meta");
} 


//Exercicio 2


let valorpedido = 180;
let clientevip = true;


if (valorpedido > 200 || clientevip) {
  console.log("Cliente tem direito a frete grátis");
} else {
  console.log("Cliente não terá frete grátis");
}

//exercicio 3


let valordoservico = 650;
let clienteantigo = true;

if (valordoservico >= 500 && clienteantigo) {
  console.log("Cliente tem direito ao desconto");
} else {
  console.log("Cliente Não tem direito ao desconto");
}

//Exercicio 4

let horariodisponivel = true;
let cadastro = true;

if (horariodisponivel && cadastro) {
    console.log("A cunsulta pode ser agendada");
} else{
    console.log("A consulta não poderá ser agendada");
}   