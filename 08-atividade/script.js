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

//Exercício 4 - Ficha de paciente - Psicólogo
const paciente = {
    nome: "Tom",
    idade: 31,
};
 
console.log(paciente);
 
const objeto1 = {
    problema: "dor de cabeça"
};
 
const objetoDestino = {};
 
Object.assign(objetoDestino, objeto1);
console.log(objetoDestino)
 
const chaves = Object.keys(objetoDestino);
console.log("\n");
 
//Exercício 5 - Cadastro de costureira - Ateliê de costura
const costureira = {
    nome: "Maria",
    experiencia: 8,
    especialidade: "costura"
};
 
costureira.experiencia += 2;
console.log(costureira.experiencia);
console.log("\n");
 
//Exercício 6 - Informações do terapeuta (Clínica de psicologia)
const terapeuta = {
    nome: "João",
    especialidade: "saúde",
    cidade: "São Paulo"
};
console.log(terapeuta);
 
const terapeuta2 = {
    primeiroNome: "João",
    sobrenome: "Lucas",
    profissao: "Terapêutico",
};
 
const[primeiroNome, sobrenome, profissao] = Object.values(terapeuta2);
console.log(primeiroNome, sobrenome, profissao);