/*Dados na tela*/ 
function chamar() {
    fetch("/avisos/chamar").then(function (resposta) {
        if (resposta.ok) {



            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));


                for (let i = 0; i < resposta.length; i++) {
                    tipo_usuario.innerHTML = resposta[i].tipo;
                    altura_usuario.innerHTML = resposta[i].altura;
                    nivel_usuario.innerHTML = resposta[i].nivel;
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}

/*Avaliação*/
function avaliar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var avaliacaoVar = input_avaliacao.value;
    var idUsuario = sessionStorage.getItem("ID_USUARIO")

    // Enviando o valor da nova input
    fetch("/usuarios/avaliar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
           avaliacaoServer: avaliacaoVar,
           idUsuarioServer: idUsuario
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            cardErro.style.display = "block";

            mensagem_erro.innerHTML = "Dados inseridos com sucesso.";
            
            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar inserir os dados.");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}