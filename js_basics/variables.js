// Ejemplo con 'var'
function ejemploVar() {
  if (true) {
    var x = 10; // 'x' está disponible en el bloque de la función
  }
  console.log(x); // Imprime 10, ya que 'x' es accesible fuera del bloque if
}

ejemploVar();

// Ejemplo con 'let'
function ejemploLet() {
  if (true) {
    let y = 20; // 'y' solo está disponible dentro del bloque if
  }
  //console.log(y); // Error: 'y' no está definida, ya que 'let' tiene un alcance de bloque
}

ejemploLet();

// Ejemplo con 'const'
function ejemploConst() {
  const z = 30;
  //z = 40; // Error: no se puede reasignar el valor de una constante
  console.log(z); // Esto no se ejecutará debido al error anterior
}

ejemploConst();
