
import { catalago, catalagotenis } from "./ultilitarios"

//produtos01
const iddosprodutoscarrinho = { 

}
//produtos 02
const iddosprodutoscarrinho02 ={          

}

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
}


function atualizarcarrinho(idproduto){
  
  document.getElementById(`quantidade-${idproduto}`).innerText = iddosprodutoscarrinho[idproduto]

  
   
}

function  incrementariddosprodutoscarrinho(idproduto){ //limitar o acrescimo de cartao almentando apenas na quantidade e nao com umm novo cartao igual dentro do carrinho  
  
  iddosprodutoscarrinho[idproduto]++
  
  atualizarcarrinho(idproduto);
}

function  decrementariddosprodutoscarrinho(idproduto){ // o inverso da funçao assima 
   iddosprodutoscarrinho[idproduto]--

}


export function adicionarprodutocarrinho(idproduto){

  if(idproduto in iddosprodutoscarrinho){
    incrementariddosprodutoscarrinho(idproduto)
  }else{

  iddosprodutoscarrinho[idproduto] = "1"

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
/*
for( const artclasses of artecleclass ){
  elementclass.classList.add(artclasses)
}*/

  const produto = catalago.find(p => p.id === idproduto) //vai pegar o produto do catalago pelo id que iremos passar da funçao addcarrinho
//find = ache um produto p talque  esse produto tenha um id = ao recebido em  idproduto
const containerprodutos = document.getElementById('produtos-adicionados')

const cartaoprodutocar = `<article class="shadow-xl shadow-slate-400  group flex p-1  bg-cyan-50  relative rounded-lg my-2" >
<button id="retirarcompra" class="absolute top-0 right-2">
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
 
<button > <i class="fa-solid fa-plus"></i> </button>

<P id="quantidade-${[produto.id]}" > ${1} </P>

<button > <i class="fa-solid fa-minus ml-3"></i> </button>

</div>

</artecle>`
      
    elementclass.innerHTML = cartaoprodutocar
  containerprodutos.appendChild(elementclass)
}
}


function atualizarcarrinho02(idproduto02){

  document.getElementById(`quantidade02-${idproduto02 }`).innerText = iddosprodutoscarrinho02[idproduto02]

}


function  incrementariddosprodutoscarrinho02(idproduto02){
      iddosprodutoscarrinho02[idproduto02]++
      atualizarcarrinho02(idproduto02)
}

function  decrementariddosprodutoscarrinho02(idproduto02){
  iddosprodutoscarrinho02[idproduto02]--

}

export function adicionarprodutocarrinho02(idproduto02){
  if(idproduto02 in iddosprodutoscarrinho02){
     
  incrementariddosprodutoscarrinho02(idproduto02)

  }else{

  iddosprodutoscarrinho02[idproduto02] = '1'

  const produto = catalagotenis.find(p => p.id === idproduto02) 
  const containerprodutos = document.getElementById('produtos-adicionados')
  
  const cartaoprodutocar = ` <article class="shadow-xl shadow-slate-400  group flex p-1  bg-cyan-50  relative rounded-lg my-2" >
  <button id="retirarcompra" class="absolute top-0 right-2">
    <i class="fa-solid fa-rectangle-xmark text-slate-800  hover:text-slate-400 "  ></i>
  </button>
  <img class="h-[150px]  " src="./midia/${produto.nomearquivoimagem}" alt="moleton01">
  
  <div class="p-5 text-slate-800  flex flex-col justify-between " >
    <p>zara</p>
    <p>${produto.nome}</p>
    <P class="text-slate-400">tamanho P</P> 
    <p class="text-lime-500 h-[15px]">$${produto.preço}</p>
  </div>    

  <div class=" flex text-slate-950  absolute bottom-0 right-2 ">
 
  <button > <i class="fa-solid fa-plus"></i> </button>
  <P  id="quantidade02-${produto.id}" class=" ml-3 ">${1} </P>
  <button class" "> <i class="fa-solid fa-minus ml-3"></i> </button>
 
  </div>
 
  </article>
  `
   containerprodutos.innerHTML += cartaoprodutocar
  }
  }

/*
export function iniciaradicao(){
    for(const quantidade=0 ; quantidade <= catalago.length ; quantidade++  ){
       
      const adicionar = document.getElementById('add-product-button')
          adicionar.addEventListener('click',adicionarprodutocarrinho)
    }
    const adicionar02 = document.getElementById('add-product-button')

    adicionar02.addEventListener('click',adicionarprodutocarrinho)

}*/