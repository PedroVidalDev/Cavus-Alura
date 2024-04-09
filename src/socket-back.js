import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Cliente conectado, IP " + socket.id);

    socket.on("selecionar_documento", (nome) => {
        socket.join(nome);
    })

    socket.on("texto_editor", (texto, nomeDoc) => {
        //socket.broadcast.emit("texto_editor_clientes", texto); 
        console.log(texto);
        socket.to(nomeDoc).emit("texto_editor_clientes", texto)
    })

    
});