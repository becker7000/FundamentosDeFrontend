// Función para mostrar/ocultar el menú con animación
function mostrarMenu() {
    var contenedor = $("#contenedor");

    // Verificar si el menú está visible
    if (contenedor.is(":hidden")) {
        // Mostrar con animación de deslizamiento
        contenedor.stop(true, true).slideDown(300).addClass("slide");
    } else {
        // Ocultar con animación de deslizamiento
        contenedor.stop(true, true).slideUp(300).removeClass("slide");
    }
}

// Mostrar el modal con información del sitio
function mostrarInformacion() {
    $('#informacion').show();
}

// Cerrar el modal
function cerrarModal() {
    $('#informacion').hide();
}

// Cambiar entre modo claro y oscuro
function cambiarTema() {
    var currentTheme = document.body.style.backgroundColor;
    if (currentTheme == 'rgb(255, 255, 255)' || currentTheme == '') {
        document.body.style.backgroundColor = '#333';
        //document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    }
}

// Mostrar formulario de contacto

function mostrarFormularioContacto() {
    // Verificar si el formulario ya está visible
    if ($('#formularioContacto').is(':visible')) {
        // Si está visible, lo ocultamos
        $('#formularioContacto').hide();
    } else {
        // Si no está visible, lo mostramos
        $('#formularioContacto').show();
    }
}

// Cargar datos dinámicamente usando AJAX
function cargarDatos() {
    $.ajax({
        url: "https://randomuser.me/api?results=1", // Solicitar un usuario aleatorio
        type: "GET",
        success: function(data) {
            // Aquí almacenamos la información del usuario recibido
            var user = data.results[0]; // Tomamos el primer usuario (en este caso solo uno)

            // Crear una estructura HTML para mostrar la información
            var html = "<h3>Datos del Usuario Aleatorio</h3>";
            html += "<img src='" + user.picture.large + "' alt='Imagen de perfil' style='border-radius: 50%; width: 150px; height: 150px;'>";
            html += "<p><strong>Nombre:</strong> " + user.name.first + " " + user.name.last + "</p>";
            html += "<p><strong>Género:</strong> " + user.gender.charAt(0).toUpperCase() + user.gender.slice(1) + "</p>";
            html += "<p><strong>Email:</strong> " + user.email + "</p>";
            html += "<p><strong>Ubicación:</strong> " + user.location.city + ", " + user.location.country + "</p>";
            html += "<p><strong>Edad:</strong> " + user.dob.age + " años</p>";

            // Mostrar la información en el contenedor de resultados
            $('#resultado').html(html);
        },
        error: function() {
            $('#resultado').html("<p>Error al cargar los datos del usuario.</p>");
        }
    });
}
