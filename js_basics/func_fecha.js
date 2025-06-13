// Función flecha para saludar
const saludar = (nombre) => {
  console.log(`¡Hola, ${nombre}!`);
};

// EJERCICIO (Función flecha para imprimir la hora actual)
const mostrarHora = () => {
  const ahora = new Date();
  const horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();
  console.log(`La hora actual es: ${horas}:${minutos}:${segundos}`);
};

// Ejemplo de uso de las funciones:
saludar("Juan");  // Imprime: ¡Hola, Juan!
mostrarHora();    // Imprime la hora actual, por ejemplo: La hora actual es: 14:25:30
