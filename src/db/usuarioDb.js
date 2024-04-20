import { usuariosColecao } from "./dbConnect.js";

async function cadastrarUsuario(dados){
    console.log(dados)
    return usuariosColecao.insertOne({
        nome: dados["usuario"],
        senha: dados["senha"]
    })
}

export {cadastrarUsuario}