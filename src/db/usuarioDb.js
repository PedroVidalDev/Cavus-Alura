import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome){
    return usuariosColecao.findOne({nome: nome});
}

function cadastrarUsuario(dados){
    return usuariosColecao.insertOne({
        nome: dados["usuario"],
        senha: dados["senha"]
    })
}

export {cadastrarUsuario, encontrarUsuario}