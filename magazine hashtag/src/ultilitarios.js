

export const catalago = [ // dados da section que estao dentro do vetor catalago
    {
    id: "1",
    nome:"casaco branco",
    marca: 'zara',
    preço: 70,
    nomearquivoimagem: 'moleton03.jpg',
    feminino: false
},
{
    id: "2",
    nome:"casaco blue",
    marca: 'zara',
    preço: 170,
    nomearquivoimagem: 'moleton01.jpg',
    feminino: false
},
{
    id: "3",
    nome:"casaco pink",
    marca: 'zara',
    preço: 120,
    nomearquivoimagem: 'moleton04.jpg',
    feminino: true
},
{
    id: "4",
    nome:"casaco black",
    marca: 'zara',
    preço: 130,
    nomearquivoimagem: 'moleton02.jpg',
    feminino: false
},

{
    id: "5",
    nome:"tenis",
    marca: 'zara',
    preço: 230,
    nomearquivoimagem: 't01.jpg',
    feminino: true
},
{
    id: "6",
    nome:"tenis ",
    marca: 'zara',
    preço: 190,
    nomearquivoimagem: 't02.jpg',
    feminino: true
},
{
    id: "7",
    nome:"tenis",
    marca: 'zara',
    preço: 240,
    nomearquivoimagem: 't03.jpg',
    feminino: false
},
{
    id: "8",
    nome:"tenis",
    marca: 'zara',
    preço: 330,
    nomearquivoimagem: 't04.jpg',
    feminino: false

}

];

//funçao que salva no navegador
 export function salvarlocalstorage(chave,informacao){
localStorage.setItem(chave, JSON.stringify(informacao));

}

export function lerlocalstorage(chave){
    return JSON.parse(localStorage.getItem(chave))
}     


  export function desenharprodutosimples(idproduto, idcontainer, quantidadeproduto){
  
    
    const produto = catalago.find(p => p.id === idproduto) 
    const containerprodutos = document.getElementById(idcontainer)
    
  const elementclass = document.createElement( "artecle")
  const artecleclass = [
    "shadow-xl", 
    "shadow-slate-400", 
    "group", 
    "flex",
    "p-1",
    "bg-cyan-50", 
    "relative" ,
    "rounded-lg",
    " my-2",
  
  ];
  
  const cartaoprodutocar = 
  `<article class=" select-none shadow-xl shadow-slate-400  group flex p-1  bg-cyan-50  relative rounded-lg my-2" >
    <img class="h-[150px]  " src="./midia/${produto.nomearquivoimagem}" alt="moleton01">
    
    <div class="p-5 text-slate-800  flex flex-col justify-between" >
        <p>zara</p>
        <p>${produto.nome}</p>
        <P class="text-slate-400">tamanho P</P> 
        <p class="text-lime-500 h-[15px]">$${produto.preço}</p>
        
    </div>
    
    <div class=" flex text-slate-950  absolute bottom-0 right-2 ">
        <P id="quantidade-${produto.id}" class="ml-3" > ${quantidadeproduto}</P>
    </div>
    
  </artecle>`
        
    elementclass.innerHTML = cartaoprodutocar
    containerprodutos.appendChild(elementclass)
  
  };
  