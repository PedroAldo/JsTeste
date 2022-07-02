const botao = document.querySelector(".botao");
const valor1 = document.querySelector(".valor1");
const valor2 = document.querySelector(".valor2");
const resultado = document.querySelector(".resultado");

function verificaValor() {
    let num1 = parseFloat(valor1.value);
    let num2 = parseFloat(valor2.value);
    if (num1 > num2){
    const conteudo = document.createTextNode(`Dos valores digitados o maior é: ${num1}`);
    resultado.textContent = "";
    resultado.appendChild(conteudo);
    }else{
    const conteudo2 = document.createTextNode(`Dos valores digitados o maior é: ${num2}`);
    resultado.textContent = "";
    resultado.appendChild(conteudo2);
    }
    valor1.value = "";
    valor2.value = "";
}
botao.addEventListener("click", verificaValor);