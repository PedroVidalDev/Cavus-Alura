import { emitirTextoEditor } from "./socket-front-documento.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value)
});

socket.on("texto_editor_clientes", (texto) => {
    textoEditor.value = texto;
})

function atualizaTextoEditor(texto){
    textoEditor.value = texto;
}

export {atualizaTextoEditor};