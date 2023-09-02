import { redenrizarcatalago } from "./cartaoproduto"
const cat = redenrizarcatalago()
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



function adicionarprodutocarrinho(){

const containerprodutos = document.getElementById('produtos-adicionados')

const cartaoprodutocar = ` <article class="shadow-xl shadow-slate-400  group flex p-1  bg-cyan-50  relative rounded-lg my-2" >
<button id="retirarcompra" class="absolute top-0 right-2">
  <i class="fa-solid fa-rectangle-xmark text-slate-800  hover:text-slate-400 "  ></i>
</button>
<img class="h-[150px]  " src="./midia/moleton01.jpg" alt="moleton01">

<div class="p-5 text-slate-800" >
  <p>zara</p>
  <p>casaco marron</p>
  <P class="text-slate-400">tamanho P</P> 
  <p class="text-lime-500 h-[15px]">$70</p>
  
</div>    
</article>
`
 containerprodutos.innerHTML += `${cartaoprodutocar}`

}

export function iniciaradicao(){

    const adicionar = document.getElementById(`adicionar`)

    adicionar.addEventListener('click',adicionarprodutocarrinho)
    const adicionar02 = document.getElementById('add02')

    adicionar02.addEventListener('click',adicionarprodutocarrinho)

}