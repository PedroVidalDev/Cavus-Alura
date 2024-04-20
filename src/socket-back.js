import { encontrarDocumento, atualizaDocumento, obterDocumentos, criarDocumento, excluiDocumento } from "./db/documentosDb.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import io from "./server.js";

io.on("connection", (socket) => {
    console.log("Cliente conectado, IP " + socket.id);

    registrarEventosInicio(socket, io);
    registrarEventosDocumento(socket, io);
});