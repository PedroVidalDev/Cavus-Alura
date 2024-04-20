import { encontrarUsuario } from "../db/usuarioDb.js";

function registrarEventosLogin(socket, io){
    socket.on("autenticar_usuario", async (dados) => {
        const dadosJson = JSON.parse(dados);
        
        const usuario = await encontrarUsuario(dadosJson["usuario"]);

        console.log(usuario)
    })

}

export default registrarEventosLogin;