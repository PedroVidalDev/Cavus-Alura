import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
    definirCookie(tokenJwt);

    alert("Usuario autenticado com sucesso!")
    window.location.href = "/";
});
socket.on("autenticacao_erro", () => {alert("Erro na autenticacao.")});
socket.on("usuario_nao_encontrado", () => {alert("Erro na autenticacao.")});

export {emitirAutenticarUsuario}