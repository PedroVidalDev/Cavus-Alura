import { inserirLinkDoc } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
    documentos.forEach(element => {
        inserirLinkDoc(element.nome);
    });
});