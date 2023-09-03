import { redenrizarcatalago } from "./cartaoproduto"
import { catalago } from "./ultilitarios"


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



export function adicionarprodutocarrinho(idproduto){

const produto = catalago.find(p => p.id === idproduto) //vai pegar o produto do catalago pelo id que iremos passar da funçao addcarrinho
//find = ache um produto p talque  esse produto tenha um id = ao recebido em  idproduto
const containerprodutos = document.getElementById('produtos-adicionados')

const cartaoprodutocar = ` <article class="shadow-xl shadow-slate-400  group flex p-1  bg-cyan-50  relative rounded-lg my-2" >
<button id="retirarcompra" class="absolute top-0 right-2">
  <i class="fa-solid fa-rectangle-xmark text-slate-800  hover:text-slate-400 "  ></i>
</button>
<img class="h-[150px]  " src="./midia/${produto.nomearquivoimagem}" alt="moleton01">

<div class="p-5 text-slate-800" >
  <p>zara</p>
  <p>${produto.nome}</p>
  <P class="text-slate-400">tamanho P</P> 
  <p class="text-lime-500 h-[15px]">$${produto.preço}</p>
  
</div>    
</article>
`
 containerprodutos.innerHTML += `${cartaoprodutocar}`

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