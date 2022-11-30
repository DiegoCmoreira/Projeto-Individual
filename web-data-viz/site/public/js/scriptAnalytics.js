function analytics() {
    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {



            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));


                for (let i = 0; i < resposta.length; i++) {
                    totalPartidas.innerHTML = resposta[i].total_partidas;
                    qtdVitorias.innerHTML = resposta[i].total_vitorias;
                    qtdDerrotas.innerHTML = resposta[i].total_derrotas;
                    qtdPontos.innerHTML = resposta[i].total_pontos;
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}