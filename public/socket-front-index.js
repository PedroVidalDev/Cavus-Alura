import { inserirLinkDoc, removerLinkDoc } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach(element => {
        inserirLinkDoc(element.nome);
    });
});

socket.on("adicionar_documento_interface", (nome) => {
    inserirLinkDoc(nome);
})

socket.on("documento_existente", (nome) => {
    alert(`O documento ${nome} ja existe.`);
})

socket.on("excluir_documento_sucesso", (nome) => {
    removerLinkDoc(nome);
})

function emitirAdicionarDocumento(nome){
    socket.emit("adicionar_documento", nome);
}

export {emitirAdicionarDocumento};