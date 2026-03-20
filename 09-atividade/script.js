//Exercicio 1


function avaliarSessao(nomedoPaciente, quantidadeSessoes) {
  console.log("Paciente:", nomedoPaciente);

  if (quantidadeSessoes >= 10) {
    return true;
  } else {
    return false; 
  }
}
console.log(avaliarSessao("Maria", 12)); 
console.log(avaliarSessao("Pedero", 7));



//Execicio 2

const calcularValorPedido = (quantidadeBolos, valorUnitario) => {
  let valorTotal = quantidadeBolos * valorUnitario;

  if (quantidadeBolos >= 10) {
    valorTotal = valorTotal * 0.9;
  }

  return valorTotal;
};

console.log(calcularValorPedido(5, 8));   
console.log(calcularValorPedido(12, 8)); 


//Exercicio 3

function listarMateriais(materiais) {
  console.log("Quantidade total de materiais:", materiais.length);

  const materiaisMaiusculos = materiais.map(material => material.toUpperCase());

  return materiaisMaiusculos;
}                                        

const lista = ["tintas", "pincéis", "tecidos", "linhas"];
const resultado1 = listarMateriais(lista);

console.log(resultado1); 



//Exercicio 4

function filtrarSaboresDisponiveis(sabores, letra) {
  return sabores.filter(sabor => sabor.startsWith(letra));
}

const sabores = ["Chocolate", "Chiclete", "Baunilha", "Caramelo", "Coco"];
const resultado = filtrarSaboresDisponiveis(sabores, "C");

console.log(resultado);



//Exercicio 5 

const paciente = {
  "nomeCompleto": "Maria Silva",
  "idade": 32,
  "planoSaude": true,
  "queixasPrincipais": [
    "Ansiedade",
    "Insônia",
    "Dificuldade de concentração"
  ],
  "ultimaSessao": {
    "data": "Sexta-Feira",
    "escalaHumor": 6,
    "prescricaoAtividade": true
  }
};

console.log(paciente.nomeCompleto);
console.log(paciente.ultimaSessao.escalaHumor);


//Exercicio 6

const pedido = {
  cliente: {
    nome: "Evellyn Elizabeth",
    telefone: "11-0000-0000"
  },

  tipoPeca: "Vestido",

  medidas: {
    busto: 92,
    cintura: 70,
    quadril: 98
  },
  tecidoEscolhido: "Seda",
  prazoDias: 15,
  statusPedido: "em produção"
};

console.log("Cliente:", pedido.cliente.nome);
console.log("Telefone:", pedido.cliente.telefone);
console.log("Peça:", pedido.tipoPeca);
console.log("Medidas:", pedido.medidas);
console.log("Status:", pedido.statusPedido);

pedido.statusPedido = "pronto";
console.log("Novo status:", pedido.statusPedido);


//Exercicio 7

const catalogoBoloDePote = {
  promocaoAtiva: true,
  descontoPercentual: 15,
  sabores: [
    {
      nomeSabor: "Chocolate",
      preco: 8.5,
      contemLactose: true,
      ingredientes: ["chocolate", "leite condensado", "creme de leite", "bolo de chocolate"]
    },
    {
      nomeSabor: "Morango",
      preco: 9.0,
      contemLactose: true,
      ingredientes: ["morango", "chantilly", "bolo de baunilha", "geleia de morango"]
    },
    {
      nomeSabor: "Limão",
      preco: 7.5,
      contemLactose: false,
      ingredientes: ["suco de limão", "bolo de baunilha", "açúcar", "raspas de limão"]
    }
  ]
};


console.log("Promoção ativa:", catalogoBoloDePote.promocaoAtiva);
console.log("Desconto:", catalogoBoloDePote.descontoPercentual + "%");


catalogoBoloDePote.sabores.forEach(sabor => {
  console.log(`Sabor: ${sabor.nomeSabor} | Preço: R$${sabor.preco}`);
});


const saboresComDesconto = catalogoBoloDePote.sabores.map(sabor => {
  const precoComDesconto = sabor.preco * (1 - catalogoBoloDePote.descontoPercentual / 100);
  return { ...sabor, precoComDesconto };
});

console.log("Sabores com desconto:", saboresComDesconto);

//Exercicio 8

const pedidoConfeitaria = {
  identificadorPedido: "Pedido 1",
  dataPedido: "Quinta-Feira",
  cliente: {
    nome: "Rafael",
    email: "rafael02.almeida@gmail.com"
  },
  itens: [
    {
      produto: "Bolo de pote - Chocolate",
      quantidade: 3,
      observacoes: "Sem granulado"
    },
    {
      produto: "Bolo de pote - Morango",
      quantidade: 2,
      observacoes: "Com chantilly extra"
    }
  ],
  enderecoEntrega: {
    rua: "Rua das Flores",
    numero: 120,
    bairro: "Centro",
    cidade: "São Paulo",
    cep: "00000-000"
  },
  formaPagamento: "pix",
  totalCalculado: 55.0
};

console.log("Pedido:", pedidoConfeitaria.identificadorPedido);
console.log("Cliente:", pedidoConfeitaria.cliente.nome);
console.log("Itens:", pedidoConfeitaria.itens);
console.log