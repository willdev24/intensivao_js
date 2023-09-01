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