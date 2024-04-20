function definirCookie(valor){
    localStorage.setItem("tokenJwt", valor);
}

function obterCookie(chave){
    return localStorage.getItem(chave);
}

export {definirCookie, obterCookie};