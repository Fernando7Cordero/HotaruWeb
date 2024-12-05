// resources/formulario.js

function mostrarFormulario(cursoId) {
    document.getElementById('cursoSeleccionado').value = cursoId;
    document.getElementById('formulario-overlay').classList.add('active');
}

function ocultarFormulario() {
    document.getElementById('formulario-overlay').classList.remove('active');
}

function mostrarNotificacion(mensaje, esError = false) {
    const notificacion = document.getElementById('notificacion');
    notificacion.textContent = mensaje;
    notificacion.classList.add('show');
    if (esError) {
        notificacion.classList.add('error');
    } else {
        notificacion.classList.remove('error');
    }
    setTimeout(() => {
        notificacion.classList.remove('show');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formulario-solicitud').addEventListener('submit', function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const jsonData = {};
        data.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Obtener la fecha de hoy
        const hoy = new Date();
        const año = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0-11
        const día = String(hoy.getDate()).padStart(2, '0');
        const fechaHoy = `${año}-${mes}-${día}`;

        // Añadir la fecha de hoy como fechaSolicitud
        jsonData['fechaSolicitud'] = fechaHoy;

        // Obtener el ID del curso seleccionado
        const cursoId = document.getElementById('cursoSeleccionado').value;

        fetch(`https://jubilant-pancake-v6vjwvpgrpx9fpx5p-8080.app.github.dev/solicitudes/${cursoId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Solicitud enviada con éxito:', data);
            mostrarNotificacion('Solicitud enviada con éxito');
            ocultarFormulario();
        })
        .catch(error => {
            console.error('Error:', error);
            mostrarNotificacion('Hubo un error al enviar la solicitud: ' + error.message, true);
        });
    });
});