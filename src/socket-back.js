import { encontrarDocumento, atualizaDocumento, obterDocumentos } from "./documentosDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Cliente conectado, IP " + socket.id);

    socket.on("obter_documentos", async (callback) => {
        const documentos = await obterDocumentos();

        callback(documentos);
    })

    socket.on("selecionar_documento", async (nome, callback) => {
        socket.join(nome);

        const documento = await encontrarDocumento(nome);
        if(documento){
            callback(documento.texto);
        }
    })

    socket.on("texto_editor", async (texto, nomeDoc) => {
        const atualizacao = await atualizaDocumento(nomeDoc, texto);

        if(atualizacao.modifiedCount){            
            socket.to(nomeDoc).emit("texto_editor_clientes", texto)
        }

    })
});