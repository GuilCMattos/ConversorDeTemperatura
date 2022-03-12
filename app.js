function Calcule() { 
    var numberValue = document.getElementById("grausConvert").value; // valor para colocarem 
    var firstOp = document.getElementsByName("firstOp") // primeiras opções para selecionar
    var secondOp = document.getElementsByName("secondOp") // segunda opç~es para selecionar
    var res = document.getElementById("res") // a resposta


    if (firstOp[0].checked && secondOp[0].checked) {  // Celsius To Celsius

    calcularCelsius(numberValue)
        
    } else if (!numberValue) { 
        alert("Você talvez esqueceu de colocar o valor ou de colocar as opções desejada, reveja e faça novamente")
    
     } else if (firstOp[0].checked && secondOp[1].checked) { // Celsius To Fahrenheit
        calcularCelsiusParaFarenheit(numberValue)

    } else if (firstOp[0].checked && secondOp[2].checked) { // Celsius To Kelvin
        calcularCelsiusParaKelvin(numberValue)
        
    } else if (firstOp[1].checked && secondOp[0].checked) { // Fahrenheit To Celsius
        calcularFahrenheitToCelsius(numberValue)

    } else if (firstOp[1].checked && secondOp[1].checked) { // Fahrenheit To Fahrenheit
        calcularFahrenheitToFahrenheit(numberValue)

    } else if (firstOp[1].checked && secondOp[2].checked) { // Fahrenheit To Kelvin
        calcularFahrenheitToKelvin(numberValue)

    } else if (firstOp[2].checked && secondOp[0].checked) { // Kelvin to Celsius
        calcularKelvinToCelsius(numberValue)

    } else if (firstOp[2].checked && secondOp[1].checked) { // Kelvin to Fahrenheit
        calcularKelvinToFahrenheit(numberValue)

    } else if (firstOp[2].checked && secondOp[2].checked) { // Kelvin to Kelvin
        KtoK(numberValue)
    } else { 
        alert("Coloque uma das opções")
    }

    document.getElementById("grausConvert").value = ""
}

function calcularCelsius(calcular) { 
    res.innerHTML = `O resultado é ${calcular}º C`
}

function calcularCelsiusParaFarenheit(calcular) {    
    res.innerHTML = `O resultado é ${(parseFloat(calcular) * 9/5) + 32}º F` 
}

function calcularCelsiusParaKelvin(calcular) { 
    res.innerHTML = `O resultado é ${parseFloat(calcular) + 273.15}º K`
}

function calcularFahrenheitToCelsius(calcular) { 
    let calculo = (parseFloat(calcular) - 32) * 5/9
    let calculoMenor = calculo.toFixed(2)
    res.innerHTML = `O resultado é ${calculoMenor}º C`
}

function calcularFahrenheitToFahrenheit(calcular) { 
    res.innerHTML = `O resultado é ${calcular}º F`
}

function calcularFahrenheitToKelvin(calcular) { 
    let calculo = (parseFloat(calcular) -32) * 5/9 + 273.15
    let resCalculo = calculo.toFixed(3)
    res.innerHTML = `O resultado é ${resCalculo}º K`
}

function calcularKelvinToCelsius(calcular) { 
    let calculo = 273.15 - parseFloat(calcular)
    let resCalc = calculo.toFixed(2)

    res.innerHTML= `O resultado é ${resCalc}º C`
}

function calcularKelvinToFahrenheit(calcular) { 
    let calculo = (parseFloat(calcular) - 273.15) * 9/5 + 32
    let resCalc = calculo.toFixed(2)

    res.innerHTML= `O resultado é ${resCalc}º F`
}

function KtoK(c) { 
    res.innerHTML = `O resultado é ${c}º K`
}



