// resources/cursos.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jubilant-pancake-v6vjwvpgrpx9fpx5p-8080.app.github.dev/cursos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(cursos => {
            const container = document.getElementById('cursos-container');
            cursos.forEach(curso => {
                const card = document.createElement('div');
                card.className = 'curso-card';
                card.innerHTML = `
                    <img src="${curso.imgPrincipal}" alt="${curso.nombre}" class="curso-imagen">
                    <h2 class="curso-nombre">${curso.nombre}</h2>
                    <p class="curso-descripcion">${curso.descripcion}</p>
                    <ul class="curso-detalles">
                        <li><strong>Profesor:</strong> ${curso.nombreProfesor}</li>
                        <li><strong>Costo Mensual:</strong> $${curso.costoMensual}</li>
                        <li><strong>Cupo Máximo:</strong> ${curso.cupoMaximo}</li>
                        <li><strong>Horario:</strong> ${curso.horario}</li>
                        <li><strong>Día de Clase:</strong> ${curso.diaDeClase}</li>
                        <li><strong>Modalidad:</strong> ${curso.modalidad}</li>
                        <li><strong>Ubicación:</strong> ${curso.ubicacion}</li>
                    </ul>
                    <button class="curso-boton" onclick="mostrarFormulario('${curso.id}')">Enviar datos</button>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
});