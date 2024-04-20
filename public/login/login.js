import { emitirAutenticarUsuario } from "./socket-front-login.js";

const form = document.querySelector("#form-login");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);
    const jsonData = JSON.stringify(dados);
    
    emitirAutenticarUsuario(jsonData);
})