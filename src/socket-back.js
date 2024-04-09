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

    socket.on("selecionar_documento", (nome) => {
        socket.join(nome);

        const documento = encontrarDocumento(nome);
        if(documento){
            socket.emit("texto_documento", documento.texto);
        }
    })

    socket.on("texto_editor", (texto, nomeDoc) => {
        const documento = encontrarDocumento(nomeDoc);

        if(documento){
            documento.texto = texto;
            
            socket.to(nomeDoc).emit("texto_editor_clientes", texto)
        }
    })
});

function encontrarDocumento(nome){
    const documento = documentos.find((element) => {
        return element.nome === nome;
    })
    return documento;
}