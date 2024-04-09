import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://root:root@cluster0.7lwongi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

let documentosColecao;

try{
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    const documentosColecao = db.collection("documentos");

    console.log("conectado ao banco")

} catch(erro){
    console.log(erro);
}

export {documentosColecao};