const sabores = ["Chocolate", "Morango", "Baunilha", "Red Velvet"];
 
function mostrar() {
    const listaDiv = document.getElementById('listaSabores');
    listaDiv.innerHTML = '';
    
    sabores.forEach(function(sabor) {
        listaDiv.innerHTML += '<p>' + sabor + '</p>';
        console.log("Sabor disponível: " + sabor);
    });
}