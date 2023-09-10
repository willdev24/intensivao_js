const catalagosprodutos = document.getElementById( "container-produto")


function exibirtodos(){

    const todosprodutos =  Array.from(
        catalagosprodutos.getElementsByClassName('hidden'))

        for(const produto of todosprodutos){
            produto.classList.remove("hidden")
            
        
}}

function escondermasculino(){
    exibirtodos();
    const prodmasculino = Array.from( 
    catalagosprodutos.getElementsByClassName("masculino"));

for(const produto of prodmasculino){
produto.classList.add("hidden")

}
}

function esconderfeminino(){
    exibirtodos();
    const prodfeminino = Array.from( 
    catalagosprodutos.getElementsByClassName("feminino"));

for(const produto of prodfeminino){
produto.classList.add("hidden")

}
}


export function inicializarfiltro(){
    document.getElementById('exibir-todos').addEventListener('click',exibirtodos)

    document.getElementById('exibir-masculino').addEventListener('click', esconderfeminino)

    document.getElementById('exibir-feminino').addEventListener('click', escondermasculino)

}