const valor1 = document.querySelector(".valor1");
const valor2 = document.querySelector(".valor2");
const valor3 = document.querySelector(".valor3");
const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");
function calculaTemperatura () {
    let nota1 = parseFloat(valor1.value) * 2;
    let nota2 = parseFloat(valor2.value) * 3;
    let nota3 = parseFloat(valor3.value) * 5;
    let total = (nota1 + nota2 + nota3) / 3;
    if (isNaN(total)){
        total = 0;
    }
    let conteudo = document.createTextNode(`A média final é: ${total}`);
    resultado.textContent = "";
    resultado.appendChild(conteudo);
}
botao.addEventListener('click', calculaTemperatura);