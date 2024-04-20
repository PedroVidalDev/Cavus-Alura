import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.querySelector("#form-cadastro");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const dados = Object.fromEntries(formData);
    const jsonData = JSON.stringify(dados);
    console.log(dados)
    
    emitirCadastrarUsuario(jsonData);
})