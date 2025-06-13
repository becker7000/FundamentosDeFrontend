const convertirTiempo = function(segundos) {
  const minutos = Math.floor(segundos / 60); // Obtener los minutos
  const segundosRestantes = segundos % 60; // Obtener los segundos restantes
  return `Minutos: ${minutos}, Segundos: ${segundosRestantes}`;
};

// Ejemplo de uso
console.log(convertirTiempo(215));  // Imprime: Minutos: 3, Segundos: 35