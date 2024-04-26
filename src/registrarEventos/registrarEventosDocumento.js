import { encontrarDocumento, atualizaDocumento, excluiDocumento } from "./../db/documentosDb.js";

function registrarEventosDocumento(socket, io){
    socket.on("selecionar_documento", async ({nomeDocumento, nomeUsuario}, callback) => {
        socket.join(nomeDocumento);

        console.log(nomeUsuario)

        const documento = await encontrarDocumento(nomeDocumento);
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

    socket.on("excluir_documento", async (nome) => {
        const resultado = await excluiDocumento(nome);

        if(resultado.deletedCount){
            io.emit("excluir_documento_sucesso", nome);
        }
    })
}

export default registrarEventosDocumento;