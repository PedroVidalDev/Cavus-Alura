import "./socket-front-index.js";
import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocs = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    emitirAdicionarDocumento(inputDocumento.value);
})

function inserirLinkDoc(nome){
    listaDocs.innerHTML += `
    <a href="documento.html?nome=${nome}" class="list-group-item list-group-item-action">
        ${nome}
    </a>
    `
}

export {inserirLinkDoc};