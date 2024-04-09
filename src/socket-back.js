import { encontrarDocumento, atualizaDocumento } from "./documentosDb.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Cliente conectado, IP " + socket.id);

    socket.on("selecionar_documento", async (nome, callback) => {
        socket.join(nome);

        const documento = await encontrarDocumento(nome);
        if(documento){
            callback(documento.texto);
        }
    })

    socket.on("texto_editor", async (texto, nomeDoc) => {
        const atualizacao = await atualizaDocumento(nomeDoc, texto);
        console.log(atualizacao);

        if(atualizacao.modifiedCount){            
            socket.to(nomeDoc).emit("texto_editor_clientes", texto)
        }

    })
});