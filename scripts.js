/*function generateNumber() {
    
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert("O número sorteado é: " + result) // para que o resultado saia apenas o número é só usar o comando:---> "ALERT (RESULTADO)"

} SERVE PARA MOSTRAR O RESULTADO ATRAVÉS DO ALERT*/

/*function generateNumber() {
    
    const min = Number(document.querySelector(".input-min").value)
    const max = Number(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const resultado = document.getElementById("resultado");

    resultado.innerText = "O número sorteado é: " + result;
} MOSTRA O RESULTADO DO SORTEIO NA TELA DO SITE*/
/*
function generateNumber() {
    
    const min = Number(document.querySelector(".input-min").value)
    const max = Number(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const alerta = document.getElementById("alerta");

    alerta.innerText = "O NÚMERO SORTEADO É: " + result;
    alerta.style.display = "block";

    // Seleciona o botão
    //const botao = document.querySelector("button");

    // Reseta animação
    botao.style.animation = "";

    // Delay curto para reiniciar animação
    setTimeout(() => {
        // Gira 1 vez em 1s, depois pisca infinitamente
        alerta.style.animation = "girar 1s linear, piscar 1s 1s infinite";
    }, 50);
}*/

function generateNumber() {
    const min = Number(document.querySelector(".input-min").value)
    const max = Number(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // seleciona o elemento do resultado
    const alerta = document.getElementById("alerta");
    alerta.innerHTML = `O número sorteado é: <strong>${result}</strong>`;
    alerta.style.display = "block";

    // remove animações antigas
    alerta.style.animation = "";

    // delay curto para reiniciar animação
    setTimeout(() => {
        // animação: gira 1 vez, depois pisca infinitamente
        alerta.style.animation = "girar 1s linear, piscar 4s 3s infinite";
    }, 50);
}

// O LISTENER ATIVA A OPÇÃO DO ENTER
const inputs = document.querySelectorAll(".input-min, .input-max");
inputs.forEach(input => {
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            generateNumber();
        }
    });
});