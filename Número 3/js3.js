const botao = document.querySelector(".botao");
const valor1 = document.querySelector(".valor1");
const resultado = document.querySelector(".resultado");

function somaValor() {
    let num1 = parseInt(valor1.value);
    if (num1 == 2 || num1 == 3 || num1 == 5) {
        const conteudo = document.createTextNode(`O número é primo? Sim!`);
        resultado.textContent = "";
        resultado.appendChild(conteudo);
    }
    else if (num1 % 2 == 0 || num1 % 3 == 0 || num1 % 4 == 0 || num1 % 5 == 0 ) {
        const conteudo = document.createTextNode(`O número é primo? Não!`);
        resultado.textContent = "";
        resultado.appendChild(conteudo);
    }else{
        const conteudo = document.createTextNode(`O número é primo? Sim!`);
        resultado.textContent = "";
        resultado.appendChild(conteudo);
    }
        valor1.value = "";
        valor2.value = "";
}
botao.addEventListener("click", somaValor);