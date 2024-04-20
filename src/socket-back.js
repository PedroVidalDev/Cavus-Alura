import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/registrarEventosCadastro.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import registrarEventosLogin from "./registrarEventos/registrarEventosLogin.js";
import io from "./server.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

io.of("/usuarios").use(autorizarUsuario);

io.of("/").on("connection", (socket) => {
    console.log("Cliente conectado, IP " + socket.id);

    registrarEventosInicio(socket, io);
    registrarEventosDocumento(socket, io);
    registrarEventosCadastro(socket, io);
    registrarEventosLogin(socket, io);
});