


//Exemplos de produtos cadastrados no sistema
let produtosCadastrados = [
    {produto: "Arroz", codigo: "001", preco: 20},
    {produto: "Feijão", codigo: "002", preco: 8},
    {produto: "Açúcar", codigo: "003", preco: 4},
    {produto: "Leite", codigo: "004", preco: 3},
    {produto: "Pão de forma", codigo: "005", preco: 5},
] 

let carrinhoUsuario = JSON.parse(localStorage.getItem('carrinho')) || [];

let totalCompras = JSON.parse(localStorage.getItem('total')) || 0;
let numeroItens;

// Botão de consultar item pelo código


const botaoConsulta = document.querySelector('#btnConsulta');

botaoConsulta.addEventListener("click", function(e) {

    e.preventDefault();

    let campoInput = document.querySelector('#codigo');
    let codigoProduto = campoInput.value;
    
    console.log(codigoProduto);

    let encontrarProduto = produtosCadastrados.find((produto) => {
        return produto.codigo === codigoProduto;

    })


    if(encontrarProduto){

        const precoProduto = encontrarProduto.preco;
        const produto = encontrarProduto.produto;
        document.getElementById('divVazia').innerText = 'O valor do '+ produto+ ' é R$' +precoProduto+ '.'

    }else {
        alert('Produto não encontrado. Tente novamente.')
    } 

})

// Botão comprar


const botaoComprar = document.querySelector('#btnComprar');
const textoValorTotal = document.getElementById('txtValorTotal')

botaoComprar.addEventListener("click", function(e) {

    e.preventDefault();

    let campoInput = document.querySelector('#codigo');
    let codigoProduto = campoInput.value;

    let encontrarProduto = produtosCadastrados.find((produto) => {
        return produto.codigo === codigoProduto;

    })

    carrinhoUsuario.push(encontrarProduto);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoUsuario));

    console.log(carrinhoUsuario);

})

// Botão do carrinho de compras

const botaoCarrinho = document.querySelector('#btnCarrinho');
const textoNumeroItens = document.querySelector('#txtNumeroItens')

botaoCarrinho.addEventListener("click", function(e) {

    e.preventDefault();
    
    totalCompras = 0

    for (let i = 0; i < carrinhoUsuario.length; i++) {
        totalCompras += carrinhoUsuario[i]['preco']; 
        localStorage.setItem('total', JSON.stringify(totalCompras));

        textoValorTotal.innerText = `O valor total de suas compras é R\$${totalCompras} reais.Tem ${carrinhoUsuario.length} itens no seu carrinho.`


    }    
     console.log(totalCompras)
     
    })
