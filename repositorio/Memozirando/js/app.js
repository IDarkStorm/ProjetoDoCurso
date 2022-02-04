var valor = document.querySelector("div.container input")
var tabuada = document.querySelector("div.container div.tabuada")
var select = document.getElementById("operacao")
const calcular = document.querySelector("div.container button")



calcular.addEventListener("click", () => {

    tabuada.innerHTML = ""

    if (Number(valor.value) < 0 || Number(valor.value) > 10) {
        tabuada.innerHTML = "Insira um valor no intervalo de 0 a 10.", + alert("foi detectado um valor nao correspondente entre 1 a 10")
        
        
    } else {

        var divisor = valor.value

        for (i = 0; i <= 10; i++) {

            switch (select.value) {
                case "soma":
                    var calc = String(i) + " + " + valor.value + " = " + (Number(i) + Number(valor.value));
                    break;
                case "divisao":
                    var calc = divisor + " / " + i + " = " + (Number(divisor) / valor.value);
                    divisor = (Number(divisor) + Number(valor.value));
                    break;
                case "multiplicacao":
                    var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value);
                    break;
                case "subtracao":
                    var calc = String(i) + " - " + valor.value + " = " + (Number(i) - Number(valor.value));
                    break;
            }

            

            var resultado = document.createElement("p")
            resultado.innerText = calc
            tabuada.appendChild(resultado)
        }
    }
})