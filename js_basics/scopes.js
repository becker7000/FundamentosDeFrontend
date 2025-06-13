// 1. **Global Scope**: Las variables definidas en el alcance global
var globalVar = "Soy una variable global";

function ejemploScope() {
  // 2. **Function Scope**: Las variables definidas dentro de una función
  var functionVar = "Soy una variable local a la función";

  if (true) {
    // 3. **Block Scope**: Las variables definidas dentro de un bloque (como un if o un bucle)
    let blockVar = "Soy una variable de bloque (let)";
    const blockConst = "Soy una constante de bloque (const)";

    console.log(globalVar);  // Accede a la variable global
    console.log(functionVar); // Accede a la variable de la función
    console.log(blockVar);    // Accede a la variable de bloque
    console.log(blockConst);  // Accede a la constante de bloque
  }

  // Fuera del bloque if, no puedes acceder a las variables de bloque
  // console.log(blockVar);  // ERROR: blockVar no está definida aquí
  // console.log(blockConst);  // ERROR: blockConst no está definida aquí

  console.log(functionVar);  // Accede a la variable de la función (sigue estando dentro del scope de la función)
}

// 4. Acceso a la variable global
console.log(globalVar);  // Accede a la variable global

ejemploScope();

// Fuera de la función, no se puede acceder a la variable de la función
// console.log(functionVar); // ERROR: functionVar no está definida fuera de la función
