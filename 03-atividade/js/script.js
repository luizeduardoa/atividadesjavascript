let subtotal = 0;
const FRETE = 20;
const LIMITE_FRETE_GRATIS = 200;
 
function adicionarCarrinho(produto, preco){
    const lista = document.getElementById("listaCarrinho");
    const item = document.createElement("li");
    item.textContent = produto + " - R$ " + preco + ",00";
    lista.appendChild(item);
 
    subtotal += preco;
 
    atualizarTotal();
}
 
function atualizarTotal(){
    let frete = subtotal >= LIMITE_FRETE_GRATIS ? 0 : FRETE;
    let totalFinal = subtotal + frete;
 
    document.getElementById("subtotal").textContent = subtotal;
    document.getElementById("frete").textContent = frete;
    document.getElementById("total").textContent = totalFinal;
}