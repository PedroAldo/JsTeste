const valor1 = document.querySelector(".valor1");
const valor2 = document.querySelector(".valor2");
const valor3 = document.querySelector(".valor3");
const valor4 = document.querySelector(".valor4");
const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");
function calculaSalario () {
    let valorPorCarro = parseFloat(valor4.value);
    let numeroDeCarrosVendidos = parseFloat(valor1.value);
    let salarioFixo = parseFloat(valor3.value);
    let valorEmVendas = parseFloat(valor2.value);
    let total = (valorPorCarro * numeroDeCarrosVendidos) + salarioFixo + (valorEmVendas * 0.05);
    if (isNaN(total)){
        total = 0;
    }
    let conteudo = document.createTextNode(`O salário a receber é: ${total}`);
    resultado.textContent = "";
    resultado.appendChild(conteudo);
}
botao.addEventListener('click', calculaSalario);