

function exercicio_01() {
    console.log("--- inicio ---")
    
    // Pegando elementos da tela
    const elInput01 = document.querySelector("#num01_ex01")
    const elInput02 = document.querySelector("#num02_ex01")
    const elSaida_ex01 = document.querySelector("#resultado_ex01")

    // Entradas
    const valor01 = elInput01.value  
    const valor02 = elInput02.value

    // Validacoes
    if(valor01 == "" || valor02 == ""){
        elSaida_ex01.innerHTML = "!"
        return
    }
    if(valor02 == 0){
        elSaida_ex01.innerHTML = "!!"
        return
    }

    // Processamento
    const resultado = valor01 / valor02

    // Saidas
    // var formattedNumber = (resultado).toFixed(2).replace(/[.,]00$/, "");
    elSaida_ex01.innerHTML = resultado
}