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

const catalago = [ //coluna01
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

const catalagotenis = [ //coluna02
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


for( const produtocatalago of catalago ){ //coluna1


const cartaoproduto = 

`<img src="../${produtocatalago.nomearquivoimagem}" 
alt="produto 1 do magazine hashtag"/>

<P>${produtocatalago.marca}</P>
<P>${produtocatalago.nome}</P>
<P>$${produtocatalago.preço}</P>
<input type="button" id="add" value="adicionar" onclick="carrinho()">`;

document.getElementById("container-produto").innerHTML += `${cartaoproduto}`
}

for( const produtocatalago of catalagotenis ){ //coluna 2


    const cartaoproduto01 = 
    
    `<img src="../${produtocatalago.nomearquivoimagem}" 
    alt="produto 1 do magazine hashtag"/>
    
    <P>${produtocatalago.marca}</P>
    <P>${produtocatalago.nome}</P>
    <P>$${produtocatalago.preço}</P>
    <input type="button" id="add" value="adicionar" onclick="carrinho()">`;
    
    document.getElementById("container-produto01").innerHTML += `${cartaoproduto01}`
    }