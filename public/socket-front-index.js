import { inserirLinkDoc } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach(element => {
        inserirLinkDoc(element.nome);
    });
});

socket.on("adicionar_documento_interface", (nome) => {
    inserirLinkDoc(nome);
})

function emitirAdicionarDocumento(nome){
    socket.emit("adicionar_documento", nome);
}

export {emitirAdicionarDocumento};