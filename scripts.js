function generateNumber() {
    
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert("O número sorteado é: " + result) // para que o resultado saia apenas o número é só usar o comando:---> "ALERT (RESULTADO)"

}