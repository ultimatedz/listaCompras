let inputProduto = document.querySelector(".inputItemProduto");
let inputQuantidade = document.querySelector(".inputItemQuantidade");
let inputValor = document.querySelector(".inputItemValor");
let remover = document.querySelector("#removerBtn");

let btnInput = document.querySelector(".btnAtivar");
let tabela = document.querySelector(".tabela")
let counter =1;

function generateTable(table,produto,quantidade,valor){
    let rowNome = table.insertRow();
    rowNome.classList.add(counter);
    let cellNome = rowNome.insertCell();
    let cellQuantidade = rowNome.insertCell();
    let cellValor = rowNome.insertCell();
    let cellRemover = rowNome.insertCell();

    let product = document.createTextNode(produto);
    let quantity = document.createTextNode(quantidade);
    let value = document.createTextNode(valor);
    let remover= document.createElement('input');
    remover.type='button';
    remover.classList.add(counter);
    remover.value='X';


    cellNome.appendChild(product);
    cellQuantidade.appendChild(quantity);
    cellValor.appendChild(value);
    cellRemover.appendChild(remover)

    counter++;

}

btnInput.onclick = function(){
    generateTable(tabela, inputProduto.value, inputQuantidade.value, inputValor.value);
}

remover.onclick = function(){
    removerLinha(tabela, remover.className);

}

function removerLinha(tabela, id){
    console.log("aqui");
    document.getElementsByClassName(id).remove();

}



