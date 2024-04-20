import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://root:root@cluster0.7lwongi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

let documentosColecao;
let usuariosColecao;

try{
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");
    usuariosColecao = db.collection("usuarios");

} catch(erro){
    console.log(erro);
}

export {documentosColecao, usuariosColecao};