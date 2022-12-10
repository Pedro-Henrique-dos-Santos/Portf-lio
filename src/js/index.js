/*
    //Objetivo - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi
    //clickada pelo usuário e esconder o conteúdo anterior

    //Passo 1 dar um jeito de pegar os elementos que representam as abas no html

    //Passo 2 dar um jeito de identificar o clique no elemento html

    //passo 3 quando o usuário clickar desmarcar a aba selecionada 

    //passo 4 marcar a aba clickada como selecionado

    //passo 5 esconder o conteúdo anterior

    //passso 6 mostrar o  conteúdo da aba selecionado 
*/

///Passo 1 dar um jeito de pegar os elementos que representam as abas no html

const abas = document.querySelectorAll(".aba");



abas.forEach(aba =>{
    //Passo 2 dar um jeito de identificar o clique no elemento html
    aba.addEventListener('click',function(){
        //caso a aba conter a classe selecionado então o código não retorna nenhum valor e para a execução
        if(aba.classList.contains("selecionado")){
            return; 
        };

        selecionarAba(aba);
        mostrarInfamoesDaAba(aba);
    
    })
});


//Refatoramos o código em functions ao invés de colocar tudo na addEventListener

function selecionarAba(aba){
    //passo 3 quando o usuário clickar desmarcar a aba selecionada 
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");
    //passo 4 marcar a aba clickada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInfamoesDaAba(aba){
    //passo 5 esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    //passso 6 mostrar o  conteúdo da aba selecionado
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const informacaoAserMostrada = document.getElementById(idDoElementoDeInformacoesDaAba); 
    informacaoAserMostrada.classList.add("selecionado");
        /*}Interpolação de strings*/
}
