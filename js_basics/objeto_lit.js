const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  color: "Gris",
  kilometraje: 15000, // en kilómetros
  obtenerDatos: function() {
    return `
        +----------- Automóvil -----------+
        | Marca: ${this.marca}
        | Modelo: ${this.modelo}
        | Año: ${this.año}
        | Color: ${this.color}
        | Kilometraje: ${this.kilometraje} km.
        +---------------------------------+`;
  }
};

// Imprime información sobre el automóvil
console.log(auto.obtenerDatos());
