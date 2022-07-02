const botao = document.querySelector(".botao");
const valor1 = document.querySelector(".valor1");
const valor2 = document.querySelector(".valor2");
const resultado = document.querySelector(".resultado");

function somaValor() {
    let total = parseFloat(valor1.value) + parseFloat(valor2.value);
    let conteudo = document.createTextNode(`A soma dos valores é: ${total}`);
    resultado.textContent = "";
    resultado.appendChild(conteudo);
    valor1.value = "";
    valor2.value = "";
}
botao.addEventListener("click", somaValor);