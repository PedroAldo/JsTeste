const valor1 = document.querySelector(".valor1");
const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");
function calculaTemperatura () {
    let graus = parseFloat(valor1.value);
    let total = ((graus - 32)/9) * 5;
    let conteudo = document.createTextNode(`O equivalente a esta temperatura em graus Celsius é: ${total}`);
    resultado.textContent = "";
    resultado.appendChild(conteudo);
}
botao.addEventListener('click', calculaTemperatura);