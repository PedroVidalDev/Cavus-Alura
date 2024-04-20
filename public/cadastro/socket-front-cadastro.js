const socket = io();

function emitirCadastrarUsuario(dados){
    socket.emit("cadastrar_usuario", dados)
}

socket.on("cadastro_sucesso", () => {alert("Cadastro realizado com sucesso!")});
socket.on("usuario_ja_existente", () => {alert("Usuario ja existe no sistema.")})
socket.on("cadastro_erro", () => {alert("Cadastro nao foi feito!")});


export {emitirCadastrarUsuario}