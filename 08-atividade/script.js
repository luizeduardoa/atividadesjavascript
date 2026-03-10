//Exercicio 1 

const cadastro = {
    nome: "Matheus",
    telefone: 1192976589,
    pedidoFavorito: "Bolo de morango",
};

console.log(cadastro.nome);
cadastro.cidade = "São Paulo";

delete cadastro.telefone;

console.log(cadastro);

//exercicio 2 

const bolo = {
    sabor: "Morango",
    preco: 30,
}

const ingredientes = {
    massa: "Pão de ló",
    recheio: "Brigadeiro",
}

const produtoFinal = {}

Object.assign(produtoFinal, bolo, ingredientes);
console.log(produtoFinal);

//Exercicio 3

const servico = {
    tipo: "Pintura",
    preco: 1200,
}

servico.preco = 1000;
servico.prazoEntrega = "7 dias";

console.log(servico);