/*const produto1 = {
    nome:"casaco branco",
    marca: 'zara',
    preço: 70,
    nomearquivoimagem: 'moleton03.jpg'
};

const produto2 = {
    nome:"casaco azul",
    marca: 'zara',
    preço: 70,
    nomearquivoimagem: 'moleton03.jpg'
};

const produto3 = {
    nome:"casaco pink",
    marca: 'zara',
    preço: 70,
    nomearquivoimagem: 'moleton03.jpg'
};

const produto4 = {
    nome:"casaco black",
    marca: 'zara',
    preço: 70,
    nomearquivoimagem: 'moleton03.jpg'
};*/

// vc pode jogar tudo dentro de um vetor 
// vc pode jogar diretamente ou so jogar as variaveis
//irei jogar direto, nesse caso as informaçoes ja ficam tudo dentro do vetor 

import { inicializarcarrinho } from "./carrinho_compras"; //importando a function do carrinho para ser executada aq

const catalago = [ // dados da primeira section que estao dentro do vetor catalago
    {
    id: 1,
    nome:"casaco branco",
    marca: 'zara',
    preço: 70,
    nomearquivoimagem: 'moleton03.jpg'
},
{
    id: 4,
    nome:"casaco blue",
    marca: 'zara',
    preço: 170,
    nomearquivoimagem: 'moleton01.jpg'
},
{
    id: 3,
    nome:"casaco pink",
    marca: 'zara',
    preço: 120,
    nomearquivoimagem: 'moleton04.jpg'
},
{
    id: 4,
    nome:"casaco black",
    marca: 'zara',
    preço: 130,
    nomearquivoimagem: 'moleton02.jpg'
}]

const catalagotenis = [ //section 2
{
    id: 5,
    nome:"tenis",
    marca: 'zara',
    preço: 230,
    nomearquivoimagem: 't01.jpg'
},
{
    id: 6,
    nome:"tenis ",
    marca: 'zara',
    preço: 190,
    nomearquivoimagem: 't02.jpg'
},
{
    id: 7,
    nome:"tenis",
    marca: 'zara',
    preço: 240,
    nomearquivoimagem: 't03.jpg'
},
{
    id: 8,
    nome:"tenis",
    marca: 'zara',
    preço: 330,
    nomearquivoimagem: 't04.jpg'
}

]


for( const produtocatalago of catalago ){ //section 1, aq o ciclo de repetiçao irar executar tudo que estiver dentro de catalago 
                                            // de aordo com a quantidade de cada vetor
                                            
// aq foi criado uma const para receber todas essa informaçoes e jogar na tela 
const cartaoproduto = `<div class='border-solid border-2 border-indigo-600 w-48 m-2 ' id="card-produto-${produtocatalago.id}"> 

<img  src="./midia/${produtocatalago.nomearquivoimagem} " 
alt="produto 1 do magazine hashtag"/>

<P>${produtocatalago.marca}</P>
<P>${produtocatalago.nome}</P>
<P>$${produtocatalago.preço}</P>
<input type="button" id="add" value="adicionar" onclick="carrinho()">
</div>`;  // dentro dessa div entre crase é criado a imagem, os <p> , os id, dos produtos que sao direcionados de dentro do vetor catalago onde seria o nosso "banco de dados

document.getElementById("container-produto").innerHTML += `${cartaoproduto}` // com as informaçoes ja adicionadas no cartao produto
}                                                                            // É feito o innerhtml na primeira section entao o ciclo de repetiçao cheagar no final do veotr catalago

for( const produtocatalago of catalagotenis ){ //coluna 2


    const cartaoproduto01 = `<div class='border-solid border-2 border-indigo-600 w-48 m-2'  id="card-produto- ${produtocatalago.id}">
    <img src="./midia/${produtocatalago.nomearquivoimagem}" 
    alt="produto 1 do magazine hashtag"/>
    
    <P>${produtocatalago.marca}</P>
    <P>${produtocatalago.nome}</P>
    <P>$${produtocatalago.preço}</P>
    <input type="button" id="add" value="adicionar" onclick="carrinho()">
    </div>`;
    
    document.getElementById("container-produto01").innerHTML += `${cartaoproduto01}`
    }


inicializarcarrinho() // executar os comando feito pelo carrinho feito no carrinho_compras 
    