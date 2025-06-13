function calcularMontoFinal(monto) {

  console.log(`El monto es: $${monto.toFixed(2)}.`)

  // Verificar si el monto excede los $1000
  if (monto > 1000) {
    // Aplicar un descuento del 7%
    const descuento = monto * 0.07;
    monto -= descuento;  // Restar el descuento del monto original
    console.log(`Se aplica un descuento de $${descuento.toFixed(2)}. El monto final a pagar es $${monto.toFixed(2)}.`);
  } else {
    // Si el monto no excede los $1000, no se aplica descuento
    console.log(`El monto final a pagar es $${monto.toFixed(2)}.`);
  }
}

// Ejemplo de uso:
calcularMontoFinal(1200);  // Imprime: Se aplica un descuento de $84.00. El monto final a pagar es $1116.00.
calcularMontoFinal(800);   // Imprime: El monto final a pagar es $800.00.
