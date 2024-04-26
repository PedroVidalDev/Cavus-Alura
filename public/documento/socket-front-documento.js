import { obterStorage } from "../utils/storage.js";
import { alertarERedirecionar, atualizaTextoEditor, tratarAutorizacaoSucesso } from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterStorage("tokenJwt")
  }
});

socket.on("autorizacao_sucesso", tratarAutorizacaoSucesso);


function selecionarDocumento(dadosEntrada) {
  socket.emit("selecionar_documento", dadosEntrada, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});


export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
