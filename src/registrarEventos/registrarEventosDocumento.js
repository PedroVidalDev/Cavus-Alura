import { adicionarConexao, encontrarConexao, obterUsuariosDocumento, removerConexao } from "../utils/conexoesDocumentos.js";
import { encontrarDocumento, atualizaDocumento, excluiDocumento } from "./../db/documentosDb.js";

function registrarEventosDocumento(socket, io){
    socket.on("selecionar_documento", async ({nomeDocumento, nomeUsuario}, callback) => {

        const documento = await encontrarDocumento(nomeDocumento);

        if(documento){
            const conexaoEncontrada = encontrarConexao(nomeDocumento, nomeUsuario);

            if(!conexaoEncontrada){
                socket.join(nomeDocumento);

                adicionarConexao({nomeDocumento, nomeUsuario});

                socket.data = {
                    usuarioEntrou: true,
                };
    
                const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);
                
                io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);
    
                callback(documento.texto);
            } else{
                socket.emit("usuario_ja_no_documento");
            }
        }

        socket.on("disconnect", () => {
            if(socket.data.usuarioEntrou){
                removerConexao(nomeDocumento, nomeUsuario);

                const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);
                
                io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);
            }
        })

    })

    socket.on("texto_editor", async (texto, nomeDoc) => {
        const atualizacao = await atualizaDocumento(nomeDoc, texto);

        if(atualizacao.modifiedCount){            
            socket.to(nomeDoc).emit("texto_editor_clientes", texto)
        }

    })

    socket.on("excluir_documento", async (nome) => {
        const resultado = await excluiDocumento(nome);

        if(resultado.deletedCount){
            io.emit("excluir_documento_sucesso", nome);
        }
    })
}

export default registrarEventosDocumento;