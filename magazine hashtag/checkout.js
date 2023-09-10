import { desenharprodutosimples, lerlocalstorage } from "./src/ultilitarios";



function desenharprodutoscheckout(){

    const idprodutocarrinhocomquantidade = lerlocalstorage("carrinho");

    for( const idproduto in idprodutocarrinhocomquantidade ){
        desenharprodutosimples(idproduto, "container-produto-chechout", idprodutocarrinhocomquantidade[idproduto])
    } 
}

desenharprodutoscheckout()