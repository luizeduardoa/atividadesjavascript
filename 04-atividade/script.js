// Exercicio 1

let opcaos = "morango"

 switch(opcao){
     case "chocolate":
     console.log("Escolhido o de chocolate!");
     break;
     case "morango":
        console.log("Um bolo de morango chegando!");
        break;
        case "leite ninho":
            console.log("Escolhido o de leite ninho");
            break;
            default:
                console.log("Não temos esse produto!")

 }

    //Exercicio 2

    let b = 1;

    while (b <= 5){
        console.log(b);
        b = b + 1;
    }

    /*Exercício 3 – Ateliê de Costura (Switch – Tipo de Serviço) 
Pergunta:

Um ateliê oferece os seguintes serviços: 
• 1 → Ajuste de barra 
• 2 → Reforma de vestido 
• 3 → Confecção sob medida 

Utilize switch para exibir o serviço escolhido. 
Considere que o cliente escolheu a opção 3.*/

let opcao = "Confecção sob medida";

switch(opcao){
    case "Ajuste de barra":
        console.log("Você escolheu a opção 1, Ajuste de barra!")
    break;
    case "Reforma de vestido":
        console.log("Você escolheu a opção 2, Reforma de vestido!")
    break;
    case "Confecção sob medida":
        console.log("Você escolheu a opção 3, Confecção sob medida!")
    break;
    default:
        console.log("Opção invalida!")
}


/*Exercício 4 – Psicólogo (While – Sessões Realizadas) 
Pergunta:

Um psicólogo realizou 4 sessões no dia. 
Crie um programa utilizando while para exibir cada sessão realizada até completar 
as 4 sessões.*/

let sessoesdia = 1;

while(sessoesdia <= 4){
    console.log(sessoesdia);
    sessoesdia++
}