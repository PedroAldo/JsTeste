const valor1 = document.querySelector(".valor1");
const valor2 = document.querySelector(".valor2");
const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");
function custoCarro () {
    let distribuidor = parseFloat(valor1.value) * 0.28;
    let imposto = parseFloat(valor1.value) * 0.45;
    let total = parseFloat(valor1.value) + distribuidor + imposto;
    let conteudo = document.createTextNode(`O custo final ao consumidor é: ${total}`);
    resultado.textContent = "";
    resultado.appendChild(conteudo);
}
botao.addEventListener('click', custoCarro);