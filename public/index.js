import "./socket-front-index.js";

const listaDocs = document.getElementById("lista-documentos");

function inserirLinkDoc(nome){
    listaDocs.innerHTML += `
    <a href="documento.html?nome=${nome}" class="list-group-item list-group-item-action">
        ${nome}
    </a>
    `
}

export {inserirLinkDoc};