import { documentosColecao } from "./dbConnect.js";

function criarDocumento(nome){
    const res = documentosColecao.insertOne({
        nome: nome,
        texto: ""
    })

    return res;
}

function encontrarDocumento(nome){
    const documento = documentosColecao.findOne({nome: nome});
    return documento;
}

function atualizaDocumento(nome, texto){
    const atualizacao = documentosColecao.updateOne({
        nome: nome
    }, {
        $set: {
            texto: texto
        }
    })
    return atualizacao;
}

function obterDocumentos(){
    const documentos = documentosColecao.find().toArray();

    return documentos;
}

export {encontrarDocumento, atualizaDocumento, obterDocumentos, criarDocumento};