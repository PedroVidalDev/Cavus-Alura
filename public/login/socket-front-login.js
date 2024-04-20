import { definirStorage } from "../utils/storage.js";

const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
    definirStorage(tokenJwt);

    alert("Usuario autenticado com sucesso!")
    window.location.href = "/";
});
socket.on("autenticacao_erro", () => {alert("Erro na autenticacao.")});
socket.on("usuario_nao_encontrado", () => {alert("Erro na autenticacao.")});

export {emitirAutenticarUsuario}