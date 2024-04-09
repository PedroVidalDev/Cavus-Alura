import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome){
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
}
function emitirTextoEditor(texto, nomeDoc){
    socket.emit("texto_editor", texto, nomeDoc);
}

function emitirExcluirDocumento(nome){
    socket.emit("excluir_documento", nome);
}

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
})

socket.on("excluir_documento_sucesso", (nome) => {
    alertarERedirecionar(nome);
})

export {emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento};