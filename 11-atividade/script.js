///Exercicio 1



class Psicologo {
  constructor(nome, valorSessao) {
    this.nome = nome;
    this.valorSessao = valorSessao;
  }


  calcularFaturamento(qtdSessoes) {
    return this.valorSessao * qtdSessoes;
  }
}


const psicologo1 = new Psicologo("Dra. Ana", 150);

const faturamento = psicologo1.calcularFaturamento(30);

console.log(`Psicólogo: ${psicologo1.nome}`);
console.log(`Valor por sessão: R$ ${psicologo1.valorSessao}`);
console.log(`Faturamento para 30 sessões: R$ ${faturamento}`);


//Exercicio 2



// classe criada
class Servico{
    constructor(tipo, valor){
        this.tipo = tipo;
        this.valor = valor;
    }
    // Metodo
   
descricao() {
    return `Tipo do serviço: ${this.tipo}
Valor: R$ ${this.valor}`;
 
}
}
 
// Nova classe
 
class Costura extends Servico {
  constructor(tipo, valor, prazoDias) {
    super(tipo, valor); // chama o construtor da classe Servico
    this.prazoDias = prazoDias;
  }
 
  descricao() {
    return `${super.descricao()}
Prazo: ${this.prazoDias} dias`;
  }
}
 
// Objeto criado
 
 
const servicoCostura = new Costura(
  "Ajuste de calça",
  80,
  3
);
 
console.log(servicoCostura.descricao());
