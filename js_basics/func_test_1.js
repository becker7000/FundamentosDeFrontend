// Función para calcular el IMC
function calcularIMC() {
  // Solicitar al usuario el peso y la altura mediante 'prompt'
  let peso = parseFloat(prompt("Introduce tu peso en kg:"));
  let altura = parseFloat(prompt("Introduce tu altura en metros:"));

  // Verificar que los valores sean válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Por favor, ingresa valores válidos para el peso y la altura.");
    return; // Sale de la función sin importar que códido venga después
  }

  // Calcular el IMC
  let imc = peso / (altura * altura);

  // Determinar la categoría del IMC
  let categoria = "";
  if (imc < 18.5) {
    categoria = "bajo peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    categoria = "sobrepeso";
  } else {
    categoria = "obesidad";
  }

  // Mostrar el resultado en la consola
  // Usando backticks para interpolar
  console.log(`Tu IMC es ${imc.toFixed(2)} y se clasifica como: ${categoria}.`);
}

// Llamar a la función para calcular el IMC
calcularIMC();
