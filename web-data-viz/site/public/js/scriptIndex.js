// carrossel
const controles = document.querySelectorAll('.controle');
let primeiroItem = 0;
const itens = document.querySelectorAll('.item');
const maxItens = itens.length;

controles.forEach((controle) => {
    controle.addEventListener('click', () => {
        const esquerda = controle.classList.contains('setaEsquerda');

        if(esquerda) {
            primeiroItem -= 1;
        } else {
            primeiroItem -= 1;
        }

        if(primeiroItem >= maxItens) {
            primeiroItem = 0;
        }

        if(primeiroItem < 0) {
            primeiroItem = maxItens -1;
        }

        itens.forEach(item => item.classList.remove('primeiro-item'));

        itens[primeiroItem].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        });

        itens[primeiroItem].classList.add('primeiro-item')
    })
});
