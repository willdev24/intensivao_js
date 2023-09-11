import { apagarlocalstorage, desenharprodutosimples, lerlocalstorage, salvarlocalstorage } from "./src/ultilitarios";


function desenharprodutoscheckout(){

    const idprodutocarrinhocomquantidade = lerlocalstorage("carrinho");

    for( const idproduto in idprodutocarrinhocomquantidade ){
        desenharprodutosimples(idproduto, "container-produto-chechout", idprodutocarrinhocomquantidade[idproduto])
    } 
}


function finalizarcompra(evento){
evento.preventDefault();
const idsprodutoscarrinhoscomquantidade = lerlocalstorage('carrinho') ?? {};

if(Object.keys(idsprodutoscarrinhoscomquantidade).length === 0){
    return;
}

const dataAtual = new Date();
const pedidofeito = {
datapedido: dataAtual,
pedido: idsprodutoscarrinhoscomquantidade,
};

const historicosdepedidos = lerlocalstorage("historico") ?? [];
const historicosdepedidosatualizado = [pedidofeito, ...historicosdepedidos];

salvarlocalstorage("historico", historicosdepedidosatualizado);
apagarlocalstorage( "carrinho")

window.location.href = window.location.origin + "/pedidos.html";

} 



desenharprodutoscheckout()



document.addEventListener('submit', (evt) => finalizarcompra(evt))
