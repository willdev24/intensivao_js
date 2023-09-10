
import { catalago, lerlocalstorage, } from "./ultilitarios"
import { salvarlocalstorage } from "./ultilitarios"
//produtos01
const iddosprodutoscarrinho = lerlocalstorage("carrinho") ?? {}


function opencarrinho(){
    
    document.getElementById('carrinhoo').classList.add('right-[0px]')  //o right move a sectioin para dentro e para fora da pagna , onde o numero positivo fica dentro
    document.getElementById('carrinhoo').classList.remove('right-[-350px]')// ja o negativo, fica fora

}

  function exitcarrinho(){

    document.getElementById('carrinhoo').classList.remove('right-[0px]')
    document.getElementById('carrinhoo').classList.add('right-[-400px]')

}

export function inicializarcarrinho(){

const botaoabrircarrinho = document.getElementById("abrircarrinho")
const botaofecharcarrinho = document.getElementById("fecharcarrinho")

botaoabrircarrinho.addEventListener(  'click', opencarrinho)
botaofecharcarrinho.addEventListener( 'click', exitcarrinho)
};


function atualizarcarrinho(idproduto){
  
  document.getElementById(`quantidade-${idproduto}`)
  .innerText = iddosprodutoscarrinho[idproduto]

};

function removerdocarrinho(idproduto){
delete iddosprodutoscarrinho[idproduto]
salvarlocalstorage('carrinho', iddosprodutoscarrinho)
atualizarpreçocarrinho() 
renderizarprodutoscarrinho();
};

function incrementariddosprodutoscarrinho(idproduto){ //limitar o acrescimo de cartao almentando apenas na quantidade e nao com umm novo cartao igual dentro do carrinho  
  
  iddosprodutoscarrinho[idproduto]++
  salvarlocalstorage('carrinho', iddosprodutoscarrinho)
  atualizarpreçocarrinho()
  atualizarcarrinho(idproduto);
};

function  decrementariddosprodutoscarrinho(idproduto){ // o inverso da funçao assima 
  if( iddosprodutoscarrinho[idproduto] === 1){
    removerdocarrinho(idproduto)
return
  }
  iddosprodutoscarrinho[idproduto]--
  salvarlocalstorage('carrinho', iddosprodutoscarrinho)
  atualizarpreçocarrinho()
   atualizarcarrinho(idproduto);
};
 
function desenharprodutocarrinho(idproduto){
  
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

   const produto = catalago.find(p => p.id === idproduto) //vai pegar o produto do catalago pelo id que iremos passar da funçao addcarrinho
//find = ache um produto p talque  esse produto tenha um id = ao recebido em  idproduto
const containerprodutos = document.getElementById('produtos-adicionados')

const cartaoprodutocar = `<article class=" select-none shadow-xl shadow-slate-400  group flex p-1  bg-cyan-50  relative rounded-lg my-2" >
<button id="retirarcompra-${produto.id}" class="absolute top-0 right-2 select-none">
  <i class="fa-solid fa-rectangle-xmark text-slate-800  hover:text-slate-400 "  ></i>
</button>
<img class="h-[150px]  " src="./midia/${produto.nomearquivoimagem}" alt="moleton01">

<div class="p-5 text-slate-800  flex flex-col justify-between" >
  <p>zara</p>
  <p>${produto.nome}</p>
  <P class="text-slate-400">tamanho P</P> 
  <p class="text-lime-500 h-[15px]">$${produto.preço}</p>
  
</div>

<div class=" flex text-slate-950  absolute bottom-0 right-2 ">
 
<button id="incrementar-produto-${produto.id}" ><i  class="fa-solid fa-plus"></i> </button>

<P id="quantidade-${produto.id}" class="ml-3" > ${iddosprodutoscarrinho[idproduto]} </P>

<button id="decrementar-produto-${produto.id}" > <i class="fa-solid fa-minus ml-3"></i> </button>

</div>

</artecle>`
      
  elementclass.innerHTML = cartaoprodutocar
  containerprodutos.appendChild(elementclass)

      document.getElementById(`incrementar-produto-${[produto.id]}`)
              .addEventListener("click", () => incrementariddosprodutoscarrinho([produto.id]))


      document.getElementById(`decrementar-produto-${[produto.id]}`)
              .addEventListener("click", () => decrementariddosprodutoscarrinho([produto.id]))


      document.getElementById(`retirarcompra-${[produto.id]}`)
              .addEventListener("click", () => removerdocarrinho([produto.id]))
};

export function renderizarprodutoscarrinho(){
    const containersprodcarrinho = document.getElementById('produtos-adicionados')
    containersprodcarrinho.innerHTML = " "

    for (const idproduto in iddosprodutoscarrinho){
      desenharprodutocarrinho(idproduto)
    }
};


export function adicionarprodutocarrinho(idproduto){

  if(idproduto in iddosprodutoscarrinho){
    incrementariddosprodutoscarrinho(idproduto)
  }else{

  iddosprodutoscarrinho[idproduto] = 1
  salvarlocalstorage('carrinho', iddosprodutoscarrinho)
  desenharprodutocarrinho(idproduto)
  atualizarpreçocarrinho()
    }  
};


function atualizarpreçocarrinho(){
const precocarrinho = document.getElementById("preço-total")

let pretotal = 0;

for (const idsprodutonocarrinho in iddosprodutoscarrinho ){
pretotal += catalago.find((p) => p.id ===idsprodutonocarrinho).preço *    //catalago.find((p) => p.id ===idsprodutonocarrinho)  isso  aq pega as informaçoes la do ultilidades onde estao os produtos 
iddosprodutoscarrinho[idsprodutonocarrinho]

} 
precocarrinho.innerHTML = ` total $ ${pretotal}`

}


/*-----------------SOU FOFA, O RESTO É RESTO ----------------------------------------------------*/
