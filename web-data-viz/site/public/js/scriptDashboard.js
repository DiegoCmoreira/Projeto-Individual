function inserir() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var partidaVar = input_partida.value;
    var vitoriaVar = input_vitoria.value;
    var derrotaVar = input_derrota.value;
    var pontoVar = input_pontos.value;

    // Enviando o valor da nova input
    fetch("/usuarios/inserir", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
           partidaServer: partidaVar,
           vitoriaServer: vitoriaVar,
           derrotaServer: derrotaVar,
           pontoServer: pontoVar
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
