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




/*
Exercício 5 - Psicólogo
Crie um JSON válido para representar o cadastro de um paciente, contendo: nome completo, idade, plano de saúde (booleano indicando se possui), lista de queixas principais (array de strings), e um objeto com dados da última sessão (data em ISO, escala de humor de 1 a 10 e se houve prescrição de atividade).
*/
 
const jsonPaciente = {
  "nomeCompleto": "Carlos Almeida",       // String
  "idade": 34,                            // Number
  "planoDeSaude": true,                   // Boolean
  "queixasPrincipais": [                  // Array de strings
    "Ansiedade crônica",
    "Insônia",
    "Estresse no trabalho"
  ],
  "ultimaSessao": {                       // Objeto aninhado com os dados da última sessão
    "data": "2026-03-23T10:00:00Z",       // Data no padrão internacional ISO
    "escalaHumor": 7,                     // Number (de 1 a 10)
    "prescricaoAtividade": true           // Boolean
  }
};
 
 
/*
Exercício 6 - Ateliê de Costura
Crie um JSON de pedido para um ateliê de costura, contendo: dados do cliente (nome e telefone), tipo de peça (ex.: vestido, camisa), medidas (busto, cintura, quadril em cm), tecido escolhido, prazo em dias e status do pedido (valores possíveis: "recebido", "em produção", "pronto", "entregue").
Inclua pelo menos três medidas dentro de um objeto.
*/
 
const jsonPedidoAtelie = {
  "cliente": {                            // Objeto aninhado para dados do cliente
    "nome": "Marina Silva",
    "telefone": "11988887777"
  },
  "tipoPeca": "vestido",                  // String indicando a peça
  "medidas": {                            // Pelo menos 3 medidas dentro de um objeto
    "busto": 92,
    "cintura": 74,
    "quadril": 102
  },
  "tecido": "linho",                      // String
  "prazoDias": 15,                        // Number
  "status": "em produção"                 // String correspondente a um dos valores possíveis
};
 
/*
Exercício 7 - Bolo de Pote
Crie um JSON de catálogo com três sabores de bolo de pote, onde cada item possua: nome do sabor, preço (número), se contém lactose (booleano), e uma lista de ingredientes.
Em seguida, inclua um campo no topo chamado
"promocaoAtiva" (booleano) e outro chamado "desconto Percentual" (número). Garanta que todos os valores textuais estejam entre aspas e que as chaves sigam nomes descritivos em minúsculas.
*/
 
const jsonCatalogoBolos = {
  "promocaoAtiva": true,                  // Booleano exigido no topo do objeto
  "descontoPercentual": 15,               // Número exigido no topo do objeto
  "sabores": [                            // Array contendo os três sabores
    {
      "nomeSabor": "ninho com morango",   // Chaves com nomes descritivos em minúsculas
      "preco": 12.50,                     // Number
      "contemLactose": true,              // Boolean
      "ingredientes": ["leite em pó", "morango fresco", "leite condensado"] // Lista (array) de ingredientes
    },
    {
      "nomeSabor": "chocolate vegano",
      "preco": 14.00,
      "contemLactose": false,
      "ingredientes": ["cacau 70%", "leite de amêndoas", "açúcar demerara"]
    },
    {
      "nomeSabor": "prestígio",
      "preco": 11.00,
      "contemLactose": true,
      "ingredientes": ["coco ralado", "chocolate ao leite", "creme de leite"]
    }
  ]
};
 
 
/*
Exercício 8 - Confeitaria
Crie um JSON de pedido online para uma confeitaria contendo: identificador do pedido, data do pedido (ISO), cliente (nome e e-mail), itens (lista de objetos com produto, quantidade e observações), endereço de entrega (rua, número, bairro, cidade, CEP), forma de pagamento (ex.: "cartão", "pix") e um campo "totalCalculado" (número).
Certifique-se de que todos os objetos e arrays estejam bem aninhados e que os tipos sejam coerentes.
*/
 
const jsonPedidoConfeitaria = {
  "identificadorPedido": "PED-998822",    // Identificador único do pedido
  "dataPedido": "2026-03-23T15:45:00Z",   // Formato ISO para datas
  "cliente": {                            // Objeto com nome e e-mail
    "nome": "João Roberto",
    "email": "joao.roberto@email.com"
  },
  "itens": [                              // Lista (array) contendo objetos
    {
      "produto": "Bolo de Cenoura Inteiro",
      "quantidade": 1,
      "observacoes": "Caprichar na cobertura de chocolate"
    },
    {
      "produto": "Brigadeiro Tradicional",
      "quantidade": 50,
      "observacoes": "Forminhas na cor azul"
    }
  ],
  "enderecoEntrega": {                    // Objeto com o endereço bem aninhado
    "rua": "Rua das Flores",
    "numero": 123,
    "bairro": "Jardim Primavera",
    "cidade": "São Paulo",
    "cep": "05400-000"
  },
  "formaPagamento": "pix",                // String (ex: pix ou cartão)
  "totalCalculado": 185.50                // Number representando o financeiro
};