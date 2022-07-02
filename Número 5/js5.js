const valor1 = document.querySelector(".valor1");
const valor2 = document.querySelector(".valor2");
const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");
function salario () {
    let total = parseFloat(valor1.value) * (parseFloat(valor2.value)/100);
    total = total + parseFloat(valor1.value);
    let conteudo = document.createTextNode(`O valor do salário com reajuste é: ${total}`)
    resultado.textContent = "";
    resultado.appendChild(conteudo);
}
botao.addEventListener('click', salario);