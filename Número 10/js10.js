const valor1 = document.querySelector(".valor1");
const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");
function calculaTemperatura () {
    let total;
    let macas = parseInt(valor1.value);
    if (macas < 12){
        total = macas * 1.30;
    } else {
        total = macas * 1;
    }
    if (isNaN(total)){
        total = 0;
    }
    let conteudo = document.createTextNode(`O valor total da compra é: ${total}`);
    resultado.textContent = "";
    resultado.appendChild(conteudo);
}
botao.addEventListener('click', calculaTemperatura);