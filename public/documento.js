import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from "./socket-front-documento.js";

const tituloDoc = document.getElementById("titulo-documento");
const textoEditor = document.getElementById("editor-texto");

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const botaoExcluir = document.getElementById("excluir-documento");
botaoExcluir.addEventListener("click", (event) => {
    event.preventDefault();

    emitirExcluirDocumento(nomeDocumento);
})

tituloDoc.textContent = nomeDocumento || "Documento sem titulo";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value, nomeDocumento);
});

function atualizaTextoEditor(texto){
    textoEditor.value = texto;
}

function alertarERedirecionar(nome){
    if(nome === nomeDocumento){
        alert(`Documento ${nome} excluido.`);
        window.location.href = "/";
    }
}

export {atualizaTextoEditor, alertarERedirecionar};