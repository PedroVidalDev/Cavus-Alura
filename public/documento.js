import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const tituloDoc = document.getElementById("titulo-documento");
const textoEditor = document.getElementById("editor-texto");

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

tituloDoc.textContent = nomeDocumento || "Documento sem titulo";

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value, nomeDocumento);
});

function atualizaTextoEditor(texto){
    textoEditor.value = texto;
}

export {atualizaTextoEditor};