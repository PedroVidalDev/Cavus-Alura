import { encontrarUsuario } from "../db/usuarioDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";

function registrarEventosLogin(socket, io){
    socket.on("autenticar_usuario", async (dados) => {
        const dadosJson = JSON.parse(dados);
        
        const usuario = await encontrarUsuario(dadosJson["usuario"]);

        if(usuario){
            const autenticado = autenticarUsuario(dadosJson["senha"], usuario);

            if(autenticado){
                const tokenJwt = gerarJwt(usuario);

                socket.emit("autenticacao_sucesso", tokenJwt);
            } else{
                socket.emit("autenticacao_erro");
            }
        } else{
            socket.emit("usuario_nao_encontrado");
        }

        
    })

}

export default registrarEventosLogin;