const valor1 = document.querySelector(".valor1");
const valor2 = document.querySelector(".valor2");
const botao = document.querySelector(".botao");
const resultado = document.querySelector(".resultado");
function hipotenusa () {
    let valorHipotenusa = (parseFloat(valor1.value) * parseFloat(valor1.value)) + (parseFloat(valor2.value) * parseFloat(valor2.value));
    let conteudo = document.createTextNode(`O valor da hipotenusa é: ${Math.sqrt(valorHipotenusa)}`)
    resultado.textContent = "";
    resultado.appendChild(conteudo);
}
botao.addEventListener('click', hipotenusa);