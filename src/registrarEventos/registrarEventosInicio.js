import { encontrarDocumento, obterDocumentos, criarDocumento } from "./../db/documentosDb.js";

function registrarEventosInicio(socket, io){
    socket.on("adicionar_documento", async (nome) => {
        const documentoExiste = (await encontrarDocumento(nome)) !== null;

        if(documentoExiste){
            socket.emit("documento_existente", nome)
        } else{
            const resultado = await criarDocumento(nome);

            if(resultado.acknowledged){
                io.emit("adicionar_documento_interface", nome);
            }
        }
    })

    socket.on("obter_documentos", async (callback) => {
        const documentos = await obterDocumentos();

        callback(documentos);
    })
}

export default registrarEventosInicio;