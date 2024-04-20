import { cadastrarUsuario } from "../db/usuarioDb.js";

function registrarEventosCadastro(socket, io){
    socket.on("cadastrar_usuario", async (dados) => {
        const resultado = await cadastrarUsuario(JSON.parse(dados));

        if(resultado.acknowledged){
            socket.emit("cadastro_sucesso");
        } else{
            socket.emit("cadastro_erro");
        }

    })
}

export default registrarEventosCadastro;