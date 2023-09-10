import { catalago } from "./ultilitarios";
import { adicionarprodutocarrinho, } from "./carrinho_compras";

export function redenrizarcatalago(){
    for( const produtocatalago of catalago ){ //section 1, aq o ciclo de repetiçao irar executar tudo que estiver dentro de catalago 
                                                // de aordo com a quantidade de cada vetor
                                                
    // aq foi criado uma const para receber todas essa informaçoes e jogar na tela 
    const cartaoproduto = `<div class='rounded-lg shadow-xl shadow-slate-400 sl m-[40px] group justify-between just border-solid  w-48 m-4  ${produtocatalago.feminino ? 'feminino':'masculino'}' id="card-produto-${produtocatalago.id}"> 
    
    <img  src="./midia/${produtocatalago.nomearquivoimagem} " 
    alt="produto 1 do magazine hashtag" 
    class=" group-hover:scale-110  duration-300 my-3 rounded-lg"
    />
    <div class=" px-[3px]">
    <P class="text-sm">${produtocatalago.marca}</P>
    <P class="text-sm" >${produtocatalago.nome}</P>
    <P class="text-lime-500 text-sm">$${produtocatalago.preço}</P>
    </div>
    <button id="add-${produtocatalago.id}" class="  rounded-lg  bg-emerald-400  m-0.5 px-[60px] text-slate-100  hover:text-sky-600"  > adicionar</button>
    </div>`;  // dentro dessa div entre crase é criado a imagem, os <p> , os id, dos produtos que sao direcionados de dentro do vetor catalago onde seria o nosso "banco de dados
    

    document.getElementById("container-produto").innerHTML += `${cartaoproduto}` // com as informaçoes ja adicionadas no cartao produto
    } 
        
    // É feito o innerhtml na primeira section entao o ciclo de repetiçao cheagar no final do veotr catalago
    }

    export function addcarrinho(){

        for( const produtocatalago of catalago){

        document.getElementById(`add-${produtocatalago.id}`).addEventListener('click',() => adicionarprodutocarrinho(produtocatalago.id))
        
}
}




