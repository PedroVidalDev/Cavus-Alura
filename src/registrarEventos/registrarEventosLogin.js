import { encontrarUsuario } from "../db/usuarioDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";

function registrarEventosLogin(socket, io){
    socket.on("autenticar_usuario", async (dados) => {
        const dadosJson = JSON.parse(dados);
        
        const usuario = await encontrarUsuario(dadosJson["usuario"]);

        if(usuario){
            const autenticado = autenticarUsuario(dadosJson["senha"], usuario);

            if(autenticado){
                socket.emit("autenticacao_sucesso");
            } else{
                socket.emit("autenticacao_erro");
            }
        } else{
            socket.emit("usuario_nao_encontrado");
        }

        
    })

}

export default registrarEventosLogin;