import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome){
    return usuariosColecao.findOne({nome: nome});
}

function cadastrarUsuario(dados){
    const {hashSenha, salSenha} = criaHashESalSenha(dados["senha"]);


    return usuariosColecao.insertOne({
        nome: dados["usuario"],
        hashSenha,
        salSenha
    })
}

export {cadastrarUsuario, encontrarUsuario}