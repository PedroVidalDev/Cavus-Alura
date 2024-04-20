import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/registrarEventosCadastro.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import registrarEventosLogin from "./registrarEventos/registrarEventosLogin.js";
import io from "./server.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
    registrarEventosInicio(socket, nspUsuarios);
    registrarEventosDocumento(socket, nspUsuarios);
})

io.of("/").on("connection", (socket) => {
    console.log("Cliente conectado, IP " + socket.id);
    registrarEventosCadastro(socket, io);
    registrarEventosLogin(socket, io);
});