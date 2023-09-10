
// vc pode jogar tudo dentro de um vetor 
// vc pode jogar diretamente ou so jogar as variaveis
//irei jogar direto, nesse caso as informaçoes ja ficam tudo dentro do vetor 

import { redenrizarcatalago } from "./src/cartaoproduto";
import { inicializarcarrinho, renderizarprodutoscarrinho } from "./src/carrinho_compras"; //importando a function do carrinho para ser executada aq
import { addcarrinho } from "./src/cartaoproduto";



redenrizarcatalago()
inicializarcarrinho() // executar os comando feito pelo carrinho feito no carrinho_compras 
renderizarprodutoscarrinho()  
addcarrinho()   
  
