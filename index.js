window.onload = () => {
    let button = document.querySelector("#btn");
  
    button.addEventListener("click", CalculaIMC);
};
  
function CalculaIMC() {
  
    let altura = parseInt(document
            .querySelector("#altura").value);
  
    let peso = parseInt(document
            .querySelector("#peso").value);
  
    let result = document.querySelector("#resultado");
  
    if (altura === "" || isNaN(altura)) 
        result.innerHTML = "Informe uma altura válida!";
  
    else if (peso === "" || isNaN(peso)) 
        result.innerHTML = "Informe um peso válido!";
  

    else {
  

        let imc = (peso / ((altura * altura) 
                            / 10000)).toFixed(2);
  
        if (imc < 18.5) result.innerHTML =
            `Magreza : <span>${imc}</span>`;
  
        else if (imc >= 18.5 && imc < 24.9) 
            result.innerHTML = 
                `Normal : <span>${imc}</span>`;

        else if (imc >= 24.9 && imc < 30.0) 
            result.innerHTML = 
                `Sobrepeso : <span>${imc}</span>`;
  
        else result.innerHTML =
            `Obesidade : <span>${imc}</span>`;
    }
}