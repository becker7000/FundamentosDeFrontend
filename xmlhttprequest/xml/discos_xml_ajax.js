function cargarColeccion(){
    let contenedor = document.getElementById("contenedor");
    let solicitud = new XMLHttpRequest();
    solicitud.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let discos, i, texto;
            texto = "<br><h2>Lista de discos</h2>";

            // Obtener todos los elementos <CD> del XML
            discos = solicitud.responseXML.getElementsByTagName("CD");

            // Crear una tabla para mostrar la colección
            texto += "<table><tr><th>Título</th><th>Artista</th><th>Precio</th><th>Año</th></tr>";

            // Iterar sobre los discos y agregar filas a la tabla
            for (i = 0; i < discos.length; i++) {
                let title = discos[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
                let artist = discos[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
                let price = discos[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
                let year = discos[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;

                texto += `<tr><td>${title}</td><td>${artist}</td><td>${price}</td><td>${year}</td></tr>`;
            }

            texto += "</table>";
            document.getElementById("mostrar").innerHTML = texto;
        }
    };
    solicitud.open("GET", "coleccion_discos.xml", true);
    solicitud.send();

    // Alternar la visibilidad del contenedor de la colección
    if (contenedor.style.display === "none") {
        contenedor.style.display = "block";
    } else {
        contenedor.style.display = "none";
    }
}