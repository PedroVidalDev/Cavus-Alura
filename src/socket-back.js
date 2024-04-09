import { documentosColecao } from "./dbConnect.js";
import io from "./server.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "Texto js"
    },
    {
        nome: "Node",
        texto: "Texto node"
    },    
    {
        nome: "Socket.io",
        texto: "Texto socket"
    }
]

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
        const documento = await encontrarDocumento(nomeDoc);

        if(documento){
            documento.texto = texto;
            
            socket.to(nomeDoc).emit("texto_editor_clientes", texto)
        }
    })
});

function encontrarDocumento(nome){
    const documento = documentosColecao.findOne({nome: nome});
    return documento;
}