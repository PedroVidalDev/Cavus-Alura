function definirStorage(valor){
    localStorage.setItem("tokenJwt", valor);
}

function obterStorage(chave){
    return localStorage.getItem(chave);
}

function removerStorage(chave){
    localStorage.removeItem(chave);
}

export {definirStorage, obterStorage, removerStorage};