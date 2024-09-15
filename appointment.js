// appointment.js
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const vet = document.getElementById('vet').value;
    const description = document.getElementById('description').value;
    const appointmentMessage = document.getElementById('appointmentMessage');

    // Mostrar un mensaje de éxito después de registrar la cita
    appointmentMessage.textContent = `Cita registrada exitosamente: Mascota: ${petName}, Fecha: ${appointmentDate}, Veterinario: ${vet}, Descripción: ${description}`;
});
