import { cadastrarUsuario, encontrarUsuario } from "../db/usuarioDb.js";

function registrarEventosCadastro(socket, io){
    socket.on("cadastrar_usuario", async (dados) => {
        const dadosJson = JSON.parse(dados);

        const usuario = await encontrarUsuario(dadosJson["usuario"]);

        if(usuario === null){
            const resultado = await cadastrarUsuario(dadosJson);

            if(resultado.acknowledged){
                socket.emit("cadastro_sucesso");
            } else{
                socket.emit("cadastro_erro");
            }
        }

        else{
            socket.emit("usuario_ja_existente");
        }

    })
}

export default registrarEventosCadastro;