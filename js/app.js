// Criar as funções adicionar e limpar - botões

let total;
limpar ();
// declaraços realizadas na função limpar, ao inves de declarar 2x é utilizado a função

function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor
    // testar se deu certo utilizando o alert
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; 
    //forma de separar a string, utilizar o separador que esta no html e entre colchetes a posição dela na string 0 antes 1 depois
    let valorUni = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // calcular o preço, o nosso subtotal
    let preco = quantidade * valorUni;

    // adicionar no carrinho 
    let carrinho = document.getElementById('lista-produtos');
    // com o inner html é possivel alterar o que esta no html
    // colocando crase e dolar é possivel colocar as variaveis que criamos 
    // colocando ele depois do igual voce acrescenta na lista ao inves de substituir
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco} </span>
        </section>`;

    // atualizar o valor total
    total = total + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = ''; 
    document.getElementById('valor-total').textContent ='R$ 0';
    // alterando para que quando apareça o carrinho ele esteja zerado

}