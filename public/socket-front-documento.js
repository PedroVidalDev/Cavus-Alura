import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome){
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
}
function emitirTextoEditor(texto, nomeDoc){
    socket.emit("texto_editor", texto, nomeDoc);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
})

export {emitirTextoEditor, selecionarDocumento};