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