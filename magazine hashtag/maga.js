
// vc pode jogar tudo dentro de um vetor 
// vc pode jogar diretamente ou so jogar as variaveis
//irei jogar direto, nesse caso as informaçoes ja ficam tudo dentro do vetor 

import { redenrizarcatalago } from "./src/cartaoproduto";
import { renderizarcatalago02 } from "./src/cartaoproduto";
import { inicializarcarrinho } from "./src/carrinho_compras"; //importando a function do carrinho para ser executada aq
import { addcarrinho } from "./src/cartaoproduto";
import { addcarrinho02 } from "./src/cartaoproduto";

redenrizarcatalago()
renderizarcatalago02()
inicializarcarrinho() // executar os comando feito pelo carrinho feito no carrinho_compras 
addcarrinho()   
addcarrinho02()