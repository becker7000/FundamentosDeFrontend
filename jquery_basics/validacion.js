$(document).ready(function() {
    // Evento al enviar el formulario
    $('#comentarios-form').on('submit', function(e) {
      e.preventDefault(); // Prevenir el envío real del formulario
  
      // Obtener los valores del nombre y el mensaje usando .val()
      var nombre = $('#nombre').val();
      var mensaje = $('#mensaje').val();
  
      // Validación simple
      if (!nombre || !mensaje) {
        // Si no hay nombre o mensaje, mostrar un error con .text()
        $('#respuesta').text('Por favor, ingrese un nombre y un mensaje.').addClass('error').removeClass('success');
      } else {
        // Si ambos campos están llenos, mostrar el mensaje de éxito
        $('#respuesta').text('¡Comentario enviado con éxito!').addClass('success').removeClass('error');
  
        // Mostrar el comentario debajo utilizando .html()
        var nuevoComentario = `<div><strong>${nombre}</strong>: ${mensaje}</div>`;
        $('#comentarios-lista').prepend(nuevoComentario);  // Añadir el nuevo comentario al principio de la lista
       
        // Limpiar los campos del formulario usando .val()
        $('#nombre').val('');
        $('#mensaje').val('');
      }
    });
  });
  